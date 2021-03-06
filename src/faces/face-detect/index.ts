/*
 *
 * Copyright © 2019 Yokesh Thirumoorthi.
 *
 * [This program is licensed under the "MIT License"]
 * Please see the file LICENSE in the source
 * distribution of this software for license terms.
 *
 */
const grpc = require('grpc');
import { FACE_DETECT_PORT } from './src/common/config';
import { kuruviProto, serverCredentials } from './src/common/grpc'
import {detectFaces} from './src/services';

/**
 * Get a new server with the handler functions in this file bound to the methods
 * it serves.
 * @return {Server} The new server object
 */
function getServer() {
  var server = new grpc.Server();
  server.addService(kuruviProto.FaceCore.service, {
     detectFaces: detectFaces
  });
  return server;
}

/**
 * Starts gRPC server that receives requests for face detection service
 */
if (require.main === module) {
    // If this is run as a script, start a server on an unused port
    var server = getServer();
    server.bind(`0.0.0.0:${FACE_DETECT_PORT}`, serverCredentials);
    server.start();
    console.log("Listening on port: ", FACE_DETECT_PORT);
}