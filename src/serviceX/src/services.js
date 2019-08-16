/*
 *
 * Copyright © 2019 Yokesh Thirumoorthi.
 *
 * [This program is licensed under the "MIT License"]
 * Please see the file LICENSE in the source
 * distribution of this software for license terms.
 *
 */

const {kuruviProto, credentials} = require('./common/grpc');
const {STATIC_GENERATOR_ENDPOINT} = require('./common/config');

const staticGeneratorService = new kuruviProto.StaticGenerator(STATIC_GENERATOR_ENDPOINT, credentials);

/**
 * 
 * Persists the albumname and photoname in database.
 * @param {*} savePhotoReq AlbumName and PhotoName are provided in this param
 */
function doSavePhoto(savePhotoReq) {
    console.log('Given Photo req:', savePhotoReq);
}

function savePhoto(call, callback) {
    callback(null, doSavePhoto(call.request));
}

/**
 * This is the final callback in executing photo-uploads to
 * photo-static-album creation process.
 * 
 * @param {*} err Error message while creating static web directory
 * @param {*} response Response on successful static web directory creation
 */
function endWorkFlowCallback(err, response) {
    if (err !== null) {
        console.log(err);
        return;
    }
    // TODO: Send the url for the new static album page
    console.log('Executed workflow: ', response);
}

/**
 * After creating the exif folders,
 * run the scanner and copy the folders and
 * photos into appropriate static web folder's cache directory
 * 
 * @param {*} err Error message while creating exif based folders
 * @param {*} response Response on successful exif folder creation.
 */
function exifFoldersGenCallback(err, response) {
    if (err !== null) {
        console.log(err);
        return;
    }
    const albumInfo = response;
    // Finally all the folders in album directory is scanned 
    // and copied into the static web's cache directory
    staticGeneratorService.createStaticWebDirectory(albumInfo, endWorkFlowCallback);
}

/**
 * 
 * After the photos are completely uploaded, 
 * the photo-details extraction process
 * is started. This function
 * helps in executing the process by calling 
 * each service in some defined order.
 * @param {*} albumInfo Contains the name of album to be processed
 */
function startWorkFlow(albumInfo) {
    console.log('Given Album Info: ', albumInfo);

    // This is temp data used for dev
    const albumFolders = {albums: [
        {albumName: 'amy', tagName: 'tag1', photos: ['amy1.png', 'amy5.png']},
        {albumName: 'amy', tagName: 'tag2', photos: ['amy1.png', 'amy2.png']}
    ]}

    // Photos are grouped under various tags using the exif details.
    // Copy the photos in given folder:photos directory structure.
    staticGeneratorService.createExifFolders(albumFolders, exifFoldersGenCallback);
}

function initWorkFlow(call, callback) {
    callback(null, startWorkFlow(call.request));
}

module.exports = {savePhoto, initWorkFlow}