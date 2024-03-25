// import important parts of sequelize library
import { Model, DataTypes, Sequelize} from 'sequelize';
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize OrderItems model (table) by extending off Sequelize's Model class
class OrderItems extends Model {}

// set up fields and rules for OrderItems model
OrderItems.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
    modelName: 'orderItems',
  }
)

module.exports = OrderItems;
