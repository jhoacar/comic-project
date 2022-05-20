const multer = require("multer");
const {maxFileSize} = require("../config/storage.js");
const myStorage = require("../helpers/handleStorage");

const uploadMiddleware = multer({ 
    storage: myStorage,
    limits: {
        fileSize: maxFileSize
    } 
});

module.exports = uploadMiddleware;