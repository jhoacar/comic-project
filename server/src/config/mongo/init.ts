import connection from './connection';

const initialization = async () => {

    try {
        await connection();
        console.log("Connection with mongo enabled");
    } catch (error) {
        console.log("Error connection", error);
    }
}


export default initialization;