import connection from './connection';
import '../../models';

const initialization = async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
    await connection.sync();
    console.log("All models were synchronized successfully.");

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


export default initialization;