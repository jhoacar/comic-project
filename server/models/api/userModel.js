const fetch = require("node-fetch");
const { api } = require("../../config/database");
const { url } = api;

const User = {};

console.log("Using model user with api");

const customCreate = async (objectToCreate) => {

    // JSON.stringify -> Toma un objeto y me devuelve un string 
    // JSON.parse -> Toma una cadena de texto y te devuelve un objeto

    const response = await fetch(url + "/users", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectToCreate),
    });

    return await response.json();
};

const getAllUsers = async ()=>{

    const response = await fetch(url+ "/users");
    return await response.json();
}

const customFindOne = async (objectToFind)=>{

    const {email} = objectToFind;

    if(!email) return {};

    const allUsers = await getAllUsers();

    // Tres parametros para la funcion filter
    filteredByEmail = (element, index, array)=>{
        return element.email === email; 
    }

    const matchedUser = allUsers.filter(filteredByEmail).shift();

    if(!matchedUser)
        return {};
    else
        return matchedUser;

};

const customUpdate = async function (dataToUpdate, objectToFind) {

    const user = await this.customFindOne(objectToFind);

    const response = await fetch(`${url}/users/${user.id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToUpdate),
    });

    return await response.json();
};

User.getAllUsers = getAllUsers;
User.customFindOne = customFindOne;
User.customCreate = customCreate;
User.customUpdate = customUpdate;

module.exports = User;