const initDatabase = async () => {

    try {
        await require("./connection");
        console.log("Connection with mongo enabled");
    } catch (error) {
        console.log("Error connection", error);
    }
}


module.exports = initDatabase;