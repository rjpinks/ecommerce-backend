// import important parts of sequelize library
import { Model, DataTypes, Sequelize} from 'sequelize';
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    bookName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    authorLast: { 
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    priceInCents: {
        type: DataTypes.INTEGER,
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
    orderItemsId: {
        type: DataTypes.INTEGER,
        //foriegnKey goes here?
        references: {
            model: "orderItems",
            key: "id"
        },
        allowNull: true,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
)

module.exports = Product;
