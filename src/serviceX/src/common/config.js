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

const PGSQL_SERVICE = process.env.PGSQL_SERVICE;
const PGSQL_SERVICE_PORT = process.env.PGSQL_SERVICE_PORT;
const PGSQL_SERVICE_API_ENDPOINT = `${PGSQL_SERVICE}:${PGSQL_SERVICE_PORT}`;

// const IMGPROXY_SERVICE = process.env.IMGPROXY_SERVICE;
// const IMGPROXY_SERVICE_PORT = process.env.IMGPROXY_SERVICE_PORT;
// const IMGPROXY_SERVICE_API_ENDPOINT = `${IMGPROXY_SERVICE}:${IMGPROXY_SERVICE_PORT}`;

// const EXIF_SERVICE = process.env.EXIF_SERVICE;
// const EXIF_SERVICE_PORT = process.env.EXIF_SERVICE_PORT;
// const EXIF_SERVICE_API_ENDPOINT = `${EXIF_SERVICE}:${EXIF_SERVICE_PORT}`;

// const FACEAPI_SERVICE = process.env.FACEAPI_SERVICE;
// const FACEAPI_SERVICE_PORT = process.env.FACEAPI_SERVICE_PORT;
// const FACEAPI_SERVICE_API_ENDPOINT = `${FACEAPI_SERVICE}:${FACEAPI_SERVICE_PORT}`;

// const IMGUPLOAD_SERVICE_PORT = process.env.IMGUPLOAD_SERVICE_PORT;
// const IMGUPLOAD_SERVICE = '0.0.0.0';
// const IMGUPLOAD_SERVICE_API_ENDPOINT =  `${IMGUPLOAD_SERVICE}:${IMGUPLOAD_SERVICE_PORT}`;

module.exports = {
    FRONTEND_PORT, FRONTEND_SERVICE, FRONTEND_ENDPOINT,
    SERVICE_X_PORT, SERVICE_X_SERVICE, SERVICE_X_ENDPOINT,
    STATIC_GENERATOR_PORT, STATIC_GENERATOR_SERVICE, STATIC_GENERATOR_ENDPOINT,
    PHOTO_UPLOAD_SERVER_PORT, PHOTO_UPLOAD_SERVER_SERVICE, PHOTO_UPLOAD_SERVER_ENDPOINT,
    
    PGSQL_SERVICE_API_ENDPOINT,
    // IMGPROXY_SERVICE_API_ENDPOINT,
    // EXIF_SERVICE_API_ENDPOINT,
    // IMGUPLOAD_SERVICE_API_ENDPOINT,
    // FACEAPI_SERVICE_API_ENDPOINT,
    // IMGUPLOAD_SERVICE_PORT
}