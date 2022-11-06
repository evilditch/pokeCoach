import { Model, DataTypes } from 'sequelize';
import { authSeque } from '../util/db.js';

class Auth extends Model{}

Auth.init({
    email:{
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate:{
            isEmail: {
                msg: "Validation isEmail failed"
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secretKey: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: authSeque,
    underscored: true,
    modelName: 'auth',
    timestamps: false
})

export default Auth;