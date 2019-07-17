/*
 *
 * Copyright © 2019 Yokesh Thirumoorthi.
 *
 * [This program is licensed under the "MIT License"]
 * Please see the file LICENSE in the source
 * distribution of this software for license terms.
 *
 */
const path = require('path');
const grpc = require('grpc');
const pino = require('pino');
const protoLoader = require('@grpc/proto-loader');
import * as faceDetection from './faceDetection';

const MAIN_PROTO_PATH = path.join(__dirname, './proto/fileUploader.proto');
const DATABASE_PORT = 50051;
const NODE_DATABASE = `pgsqlservice:${DATABASE_PORT}`;
const IMGPROXY_PORT = 50053;
const IMGPROXY_SERVICE = `imgproxyservice:${IMGPROXY_PORT}`;
const FACEAPI_PORT = 50054;
const FACEAPI_SERVICE = `imgproxyservice:${FACEAPI_PORT}`;

const kuruviProto = _loadProto(MAIN_PROTO_PATH).kuruvi;
// const healthProto = _loadProto(HEALTH_PROTO_PATH).grpc.health.v1;

const credentials = grpc.credentials.createInsecure();
const pgsqlservice = new kuruviProto.PhotoUploadService(NODE_DATABASE, credentials);
const imgProxyService = new kuruviProto.ImgProxyService(IMGPROXY_SERVICE, credentials);

const logger = pino({
  name: 'faceapiservice-server',
  messageKey: 'message',
  changeLevelName: 'severity',
  useLevelLabels: true
});

/**
 * Helper function that loads a protobuf file.
 */
function _loadProto (path) {
  const packageDefinition = protoLoader.loadSync(
    path,
    {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true
    }
  );
  return grpc.loadPackageDefinition(packageDefinition);
}

function _getBoundingBoxes (pathResponse) {
  const imagePath = pathResponse.imagePath;
  const boundingboxes = faceDetection.run(imagePath);
  return boundingboxes;
}

function _getInsertBoundingBoxesRequestObj (ExifRequest, exif) {
  const photo_id = ExifRequest.photo_id;
  const InsertExifRequest = {
    photo_id: photo_id,
    exif: exif,
  };
  return InsertExifRequest;
}

/**
 *  Implements the exif extraction RPC method.
 *
 *  Get the Path of the given photo id by querying the database,
 *  then use the path to run exif lamda.
 *  Finally insert the result into data base.
 */
async function detectfaces(call, callback) {
  const FaceDetectRequest = call.request;
  logger.info(`Received Face detect request`);

  const saveFaces = (err, response) => {
    const BoundingboxesIdArray = response;
    const EmptyCallback = () => {};
    imgProxyService.cropFaces(BoundingboxesIdArray, EmptyCallback);

  }

  const getPhotoPathCallback = (err, response) => {
    // get the exif data extracted out of the image
    const boundingboxes = _getBoundingBoxes(response);
    // generate a grpc request message
    const InsertBoundingBoxesRequest = _getInsertBoundingBoxesRequestObj(FaceDetectRequest, boundingboxes);
    console.log(InsertBoundingBoxesRequest);
    // insert exif into db using gRPC call
    // pgsqlservice.insertBoundingBoxes(InsertBoundingBoxesRequest, saveFaces);
  };

  try {
    pgsqlservice.getPhotoFullPath(FaceDetectRequest,getPhotoPathCallback);
  } catch (err) {
    logger.error(`Exif extraction request failed: ${err}`);
  }

}

/**
 * Starts an RPC server that receives requests for the exif service at the
 * server port
 */
function main() {
  const server = new grpc.Server();
  server.addService(kuruviProto.FaceApiService.service, {detectfaces: detectfaces});
  server.bind(FACEAPI_SERVICE, grpc.ServerCredentials.createInsecure());
  logger.info(`Starting faceapi Server on port ${FACEAPI_PORT}`);
  server.start();
}

main();
