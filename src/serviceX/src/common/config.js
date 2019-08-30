 /*
 *
 * Copyright © 2019 Yokesh Thirumoorthi.
 *
 * [This program is licensed under the "MIT License"]
 * Please see the file LICENSE in the source
 * distribution of this software for license terms.
 *
 */
require('dotenv').config();

const FRONTEND_PORT = process.env.FRONTEND_PORT;
const FRONTEND_SERVICE = process.env.FRONTEND_SERVICE;
const FRONTEND_ENDPOINT = `${FRONTEND_SERVICE}:${FRONTEND_PORT}`;

const SERVICE_X_PORT = process.env.SERVICE_X_PORT;
const SERVICE_X_SERVICE = process.env.SERVICE_X_SERVICE;
const SERVICE_X_ENDPOINT = `${SERVICE_X_SERVICE}:${SERVICE_X_PORT}`;

const STATIC_GENERATOR_PORT = process.env.STATIC_GENERATOR_PORT;
const STATIC_GENERATOR_SERVICE = process.env.STATIC_GENERATOR_SERVICE;
const STATIC_GENERATOR_ENDPOINT = `${STATIC_GENERATOR_SERVICE}:${STATIC_GENERATOR_PORT}`;

const PHOTO_UPLOAD_SERVER_PORT = process.env.PHOTO_UPLOAD_SERVER_PORT;
const PHOTO_UPLOAD_SERVER_SERVICE = process.env.PHOTO_UPLOAD_SERVER_SERVICE;
const PHOTO_UPLOAD_SERVER_ENDPOINT = `${PHOTO_UPLOAD_SERVER_SERVICE}:${PHOTO_UPLOAD_SERVER_PORT}`;

const EXIF_CORE_SERVICE = process.env.EXIF_CORE_SERVICE;
const EXIF_CORE_PORT = process.env.EXIF_CORE_PORT;
const EXIF_CORE_ENDPOINT = `${EXIF_CORE_SERVICE}:${EXIF_CORE_PORT}`;

const EXIF_API_SERVICE = process.env.EXIF_API_SERVICE;
const EXIF_API_PORT = process.env.EXIF_API_PORT;
const EXIF_API_ENDPOINT = `${EXIF_API_SERVICE}:${EXIF_API_PORT}`;

const EXIF_QUEUE_SERVICE = process.env.EXIF_QUEUE_SERVICE;
const EXIF_QUEUE_PORT = process.env.EXIF_QUEUE_PORT;
const EXIF_QUEUE_ENDPOINT = `${EXIF_QUEUE_SERVICE}:${EXIF_QUEUE_PORT}`;

const CADDY_SERVER_SERVICE = process.env.CADDY_SERVER_SERVICE;
const CADDY_SERVER_PORT = process.env.CADDY_SERVER_PORT;
const CADDT_SERVER_ENDPOINT = `${CADDY_SERVER_SERVICE}:${CADDY_SERVER_PORT}`;

const EXIF_DGRAPH = process.env.EXIF_DGRAPH;
const EXIF_DGRAPH_PORT_2 = process.env.EXIF_DGRAPH_PORT_2;
const EXIF_DGRAPH_ENDPOINT = `${EXIF_DGRAPH}:${EXIF_DGRAPH_PORT_2}`;

const FACE_API_SERVICE = process.env.FACE_API_SERVICE;
const FACE_API_PORT = process.env.FACE_API_PORT;
const FACE_API_ENDPOINT = `${FACE_API_SERVICE}:${FACE_API_PORT}`;

const FACE_QUEUE_SERVICE = process.env.FACE_QUEUE_SERVICE;
const FACE_QUEUE_PORT = process.env.FACE_QUEUE_PORT;
const FACE_QUEUE_ENDPOINT = `${FACE_QUEUE_SERVICE}:${FACE_QUEUE_PORT}`;

const FACE_DETECT_SERVICE = process.env.FACE_DETECT_SERVICE;
const FACE_DETECT_PORT = process.env.FACE_DETECT_PORT;
const FACE_DETECT_ENDPOINT = `${FACE_DETECT_SERVICE}:${FACE_DETECT_PORT}`;

const FACE_CROP_SERVICE = process.env.FACE_CROP_SERVICE;
const FACE_CROP_PORT = process.env.FACE_CROP_PORT;
const FACE_CROP_ENDPOINT = `${FACE_CROP_SERVICE}:${FACE_CROP_PORT}`;

const FACE_CROP_SERVER_SERVICE = process.env.FACE_CROP_SERVER_SERVICE;
const FACE_CROP_SERVER_PORT = process.env.FACE_CROP_SERVER_PORT;
const FACE_CROP_SERVER_ENDPOINT =  `${FACE_CROP_SERVER_SERVICE}:${FACE_CROP_SERVER_PORT}`;

const RESIZE_CORE_SERVICE = process.env.RESIZE_CORE_SERVICE;
const RESIZE_CORE_PORT = process.env.RESIZE_CORE_PORT;
const RESIZE_CORE_ENDPOINT = `${RESIZE_CORE_SERVICE}:${RESIZE_CORE_PORT}`;

const RESIZE_API_SERVICE = process.env.RESIZE_API_SERVICE;
const RESIZE_API_PORT = process.env.RESIZE_API_PORT;
const RESIZE_API_ENDPOINT = `${RESIZE_API_SERVICE}:${RESIZE_API_PORT}`;

const RESIZE_QUEUE_SERVICE = process.env.RESIZE_QUEUE_SERVICE;
const RESIZE_QUEUE_PORT = process.env.RESIZE_QUEUE_PORT;
const RESIZE_QUEUE_ENDPOINT = `${RESIZE_QUEUE_SERVICE}:${RESIZE_QUEUE_PORT}`;

const PGSQL_SERVICE = process.env.PGSQL_SERVICE;
const PGSQL_SERVICE_PORT = process.env.PGSQL_SERVICE_PORT;
const PGSQL_SERVICE_API_ENDPOINT = `${PGSQL_SERVICE}:${PGSQL_SERVICE_PORT}`;

// const IMGPROXY_SERVICE = process.env.IMGPROXY_SERVICE;
// const IMGPROXY_SERVICE_PORT = process.env.IMGPROXY_SERVICE_PORT;
// const IMGPROXY_SERVICE_API_ENDPOINT = `${IMGPROXY_SERVICE}:${IMGPROXY_SERVICE_PORT}`;

// const EXIF_SERVICE = process.env.EXIF_SERVICE;
// const EXIF_SERVICE_PORT = process.env.EXIF_SERVICE_PORT;
// const EXIF_SERVICE_API_ENDPOINT = `${EXIF_SERVICE}:${EXIF_SERVICE_PORT}`;

const FACEAPI_SERVICE = process.env.FACEAPI_SERVICE;
const FACEAPI_SERVICE_PORT = process.env.FACEAPI_SERVICE_PORT;
const FACEAPI_SERVICE_API_ENDPOINT = `${FACEAPI_SERVICE}:${FACEAPI_SERVICE_PORT}`;

// const IMGUPLOAD_SERVICE_PORT = process.env.IMGUPLOAD_SERVICE_PORT;
// const IMGUPLOAD_SERVICE = '0.0.0.0';
// const IMGUPLOAD_SERVICE_API_ENDPOINT =  `${IMGUPLOAD_SERVICE}:${IMGUPLOAD_SERVICE_PORT}`;

module.exports = {
    FRONTEND_PORT, FRONTEND_SERVICE, FRONTEND_ENDPOINT,
    SERVICE_X_PORT, SERVICE_X_SERVICE, SERVICE_X_ENDPOINT,
    STATIC_GENERATOR_PORT, STATIC_GENERATOR_SERVICE, STATIC_GENERATOR_ENDPOINT,
    PHOTO_UPLOAD_SERVER_PORT, PHOTO_UPLOAD_SERVER_SERVICE, PHOTO_UPLOAD_SERVER_ENDPOINT,
    
    EXIF_CORE_SERVICE, EXIF_CORE_PORT, EXIF_CORE_ENDPOINT,
    EXIF_API_SERVICE, EXIF_API_PORT, EXIF_API_ENDPOINT,
    EXIF_QUEUE_SERVICE, EXIF_QUEUE_PORT, EXIF_QUEUE_ENDPOINT,
    CADDY_SERVER_SERVICE, CADDY_SERVER_PORT, CADDT_SERVER_ENDPOINT,

    EXIF_DGRAPH, EXIF_DGRAPH_PORT_2, EXIF_DGRAPH_ENDPOINT,
    FACE_API_SERVICE, FACE_API_PORT, FACE_API_ENDPOINT,
    FACE_QUEUE_SERVICE, FACE_QUEUE_PORT, FACE_QUEUE_ENDPOINT,
    FACE_DETECT_SERVICE, FACE_DETECT_PORT, FACE_DETECT_ENDPOINT,
    FACE_CROP_SERVICE, FACE_CROP_PORT, FACE_CROP_ENDPOINT,
    FACE_CROP_SERVER_SERVICE, FACE_CROP_SERVER_PORT, FACE_CROP_SERVER_ENDPOINT,
    RESIZE_CORE_SERVICE, RESIZE_CORE_PORT, RESIZE_CORE_ENDPOINT,
    RESIZE_API_SERVICE, RESIZE_API_PORT, RESIZE_API_ENDPOINT,
    RESIZE_QUEUE_SERVICE, RESIZE_QUEUE_PORT, RESIZE_QUEUE_ENDPOINT,
    PGSQL_SERVICE_API_ENDPOINT,
    // IMGPROXY_SERVICE_API_ENDPOINT,
    // EXIF_SERVICE_API_ENDPOINT,
    // IMGUPLOAD_SERVICE_API_ENDPOINT,
    FACEAPI_SERVICE_API_ENDPOINT,
    // IMGUPLOAD_SERVICE_PORT
}