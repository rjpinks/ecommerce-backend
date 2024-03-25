import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/connection';

interface ProductAttributes {
    id: number;
    bookName: string;
    authorLast: string;
    imgUrl: string;
    description: string
    isbn: number;
    genre: string;
    priceInCents: number;
    createdAt: Date;
    modifiedAt?: Date | null;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public id!: number;
    public bookName!: string;
    public authorLast!: string;
    public imgUrl!: string;
    public description!: string;
    public isbn!: number;
    public genre!: string;
    public priceInCents!: number;

    // timestamps
    public readonly createdAt!: Date;
    public modifiedAt?: Date | null;
}

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
        type: DataTypes.STRING,
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

export default Product;
