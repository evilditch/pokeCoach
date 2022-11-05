import { Sequelize} from 'sequelize';
import { AUTH_URL, DATA_URL } from './config.js';

const dataSeque = new Sequelize(DATA_URL);
const authSeque = new Sequelize(AUTH_URL);


const connectToDatabase = async () => {
    try{
        await dataSeque.authenticate();
        await authSeque.authenticate();
        console.log('Databases connected');
    }catch (err) {
        console.log('connecting database failed');
        return process.exit(1);
      }
    
      return null;
}

export{ connectToDatabase, authSeque, dataSeque}