"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var faceapi = require("face-api.js");
var commons_1 = require("./commons");
var rabbit = require('./rabbitmq');
var pg = require('./postgres');
var fs = require('fs');
function recognize(referenceImagePath, queryImagePath) {
    return __awaiter(this, void 0, void 0, function () {
        var REFERENCE_IMAGE, QUERY_IMAGE, referenceImage, queryImage, resultsRef, resultsQuery, faceMatcher;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    REFERENCE_IMAGE = referenceImagePath;
                    QUERY_IMAGE = queryImagePath;
                    return [4 /*yield*/, commons_1.faceDetectionNet.loadFromDisk('./weights')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, faceapi.nets.faceLandmark68Net.loadFromDisk('./weights')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, faceapi.nets.faceRecognitionNet.loadFromDisk('./weights')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, commons_1.canvas.loadImage(REFERENCE_IMAGE)];
                case 4:
                    referenceImage = _a.sent();
                    return [4 /*yield*/, commons_1.canvas.loadImage(QUERY_IMAGE)];
                case 5:
                    queryImage = _a.sent();
                    return [4 /*yield*/, faceapi.detectAllFaces(referenceImage, commons_1.faceDetectionOptions)
                            .withFaceLandmarks()
                            .withFaceDescriptors()];
                case 6:
                    resultsRef = _a.sent();
                    return [4 /*yield*/, faceapi.detectAllFaces(queryImage, commons_1.faceDetectionOptions)
                            .withFaceLandmarks()
                            .withFaceDescriptors()];
                case 7:
                    resultsQuery = _a.sent();
                    faceMatcher = new faceapi.FaceMatcher(resultsRef);
                    return [2 /*return*/, faceMatcher];
            }
        });
    });
}
exports.recognize = recognize;
rabbit.receiveMessage(function (photo_id) {
    pg.getPhotoFullPath(photo_id).then(function (imagePath) { return __awaiter(_this, void 0, void 0, function () {
        var recognitionJson;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, recognize(imagePath, imagePath)];
                case 1:
                    recognitionJson = _a.sent();
                    console.log(recognitionJson);
                    recognitionJson._labeledDescriptors.map(function (faceDescriptor) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, pg.insertFaceDescriptors(photo_id, faceDescriptor)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); });
                    return [2 /*return*/];
            }
        });
    }); });
});