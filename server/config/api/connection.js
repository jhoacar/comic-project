const fetch = require("node-fetch");
const {api} = require("../database");
const {url} = api;

const fetchAPI = async ()=>{
    return await fetch(url);
}

module.exports = fetchAPI;