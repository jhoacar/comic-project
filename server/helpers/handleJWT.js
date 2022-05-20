const jwt = require('jsonwebtoken');
const {secretKey, expiresInJWT} = require("../config/hash");

const getJsonWebToken = (userData)=>{
    return jwt.sign(userData,secretKey,{ expiresIn: expiresInJWT });
}

const getPayloadData = (token)=>{
    return jwt.verify(token, secretKey);
}


module.exports = {
    getJsonWebToken,
    getPayloadData,
}