import { Model, DataTypes } from 'sequelize';
import { dataSeque } from '../util/db.js';

class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate:{
            isEmail: {
                msg: "Validation isEmail failed"
            }
        }
    },
    pronounce:{
        type: DataTypes.STRING,
        defaultValue: "Other"
    }
}, {
    sequelize: dataSeque,
    underscored: true,
    timestamps:false,
    modelName: 'user'
});

export default User;