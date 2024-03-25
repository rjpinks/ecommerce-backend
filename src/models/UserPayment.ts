// import important parts of sequelize library
import { Model, DataTypes, Sequelize} from 'sequelize';
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize UserPayment model (table) by extending off Sequelize's Model class
class UserPayment extends Model {}

// set up fields and rules for UserPayment model
UserPayment.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    paymentType: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    paymentProvider: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    accountNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expiration: {
        type: DataTypes.STRING(5),
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userPayment',
  }
)

module.exports = UserPayment;
