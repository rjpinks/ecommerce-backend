// import important parts of sequelize library
import { Model, DataTypes, Sequelize} from 'sequelize';
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize PaymentDetails model (table) by extending off Sequelize's Model class
class PaymentDetails extends Model {}

// set up fields and rules for PaymentDetails model
PaymentDetails.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    orderNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    amountInCents: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    paymentProvider: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    orderStatus: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    modifiedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'paymentDetails',
  }
)

module.exports = PaymentDetails;
