const initConnectionDatabase = require("../config/initDatabase");

const handleStartServer = async function(){
    
    console.log("Server had been started on port ",this.address().port);

    initConnectionDatabase();

};

module.exports = handleStartServer;