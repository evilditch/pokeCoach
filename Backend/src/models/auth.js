import { Model, DataTypes } from 'sequelize';
import { authSeque, dataSeque } from '../util/db.js';

class Auth extends Model{}

Auth.init({
    email:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secretKey: {
        type: DataTypes.STRING,
        defaultValue: "Very Secret"
    }
}, {
    sequelize: authSeque,
    underscored: true,
    modelName: 'auth',
    timestamps: false
})

export default Auth;