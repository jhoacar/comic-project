const fetchAPI = require('./connection')

const initDatabase = async () => {

    try {
        const response = await fetchAPI();
        
        if(response.status === 200)
            console.log("Connection with api enabled");
        else
            console.log("Connection not enabled")
            
    } catch (error) {
        console.log("Error connection", error);
    }
}


module.exports = initDatabase;