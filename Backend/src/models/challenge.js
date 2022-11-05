import { Model, DataTypes } from 'sequelize';
import { dataSeque } from '../util/db.js';

class Challenge extends Model { }

Challenge.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model:'users', key: 'id'}
    },
    isPrimary: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: dataSeque,
    underscored: true,
    timestamps: false,
    modelName: "challenge"
});

export default Challenge;