// import important parts of sequelize library
import { Model, DataTypes, Sequelize} from 'sequelize';
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize UserAddress model (table) by extending off Sequelize's Model class
class UserAddress extends Model {}

// set up fields and rules for UserAddress model
UserAddress.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    addressLine1: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    addressLine2: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userAddress',
  }
)

module.exports = UserAddress;
