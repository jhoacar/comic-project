const {mongo} = require("../database");
const mongoose = require("mongoose");
module.exports = mongoose.connect(mongo.uri);