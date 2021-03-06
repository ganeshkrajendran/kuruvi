/*
 *
 * Copyright © 2019 Yokesh Thirumoorthi.
 *
 * [This program is licensed under the "MIT License"]
 * Please see the file LICENSE in the source
 * distribution of this software for license terms.
 *
 */

const utils = require('./utils');
const {newTransaction, newMutation} = require('./dbClient');

async function getPhotoUID(photoName) {
    const query = utils.getPhotoUIDQuery(); 
    const vars = { $a: photoName };
    const res = await newTransaction().queryWithVars(query, vars);
    const photoNode= res.getJson();

    console.log("Photonode: ", photoNode);
    const photoUID = photoNode.all[0].uid;

    return photoUID;
}

async function addExif(exif, photoUID) {
    const query = utils.getAddExifQuery(exif, photoUID);
    console.log("Add exif query: ", query);
    await createData(query);
}

// Create data using JSON.
async function createData(data) {
    // Create a new transaction.
    const txn = newTransaction();
    try {
        // Run mutation.
        const mu = newMutation();
        mu.setSetJson(data);
        const assigned = await txn.mutate(mu);

        // Commit transaction.
        await txn.commit();

        assigned.getUidsMap().forEach((uid, key) => console.log(`${key} => ${uid}`));
    } finally {
        // Clean up. Calling this after txn.commit() is a no-op
        // and hence safe.
        await txn.discard();
    }
}

module.exports = {addExif, getPhotoUID}