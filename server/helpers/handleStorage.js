const multer = require("multer");

const path = require("path");

const handleDestination = function (req, file, cb) {
    const pathStorage = path.resolve(__dirname + "/../storage");
    return cb(null, pathStorage);
};

const handleFileName = function (req, file, cb) {

    const uniqueSuffix = Date.now();
    const filename = file.originalname;
    const extension = filename.split(".").pop();
    const newName =  'filename-' + uniqueSuffix + "." + extension;

    req.avatarPath = "/users/"+newName;
    
    return cb(null, newName);
}

const storage = multer.diskStorage({
    destination: handleDestination,
    filename: handleFileName
})


module.exports = storage;