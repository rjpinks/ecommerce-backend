import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/connection';

interface UserPaymentAttributes {
    id: number;
    paymentType: string;
    paymentProvider: string;
    accountNumber: number;
    expiration: string;
    createdAt: Date;
    modifiedAt?: Date | null;
}

interface UserPaymentCreationAttributes extends Optional<UserPaymentAttributes, 'id'> {}

// Initialize UserPayment model (table) by extending off Sequelize's Model class
class UserPayment extends Model<UserPaymentAttributes, UserPaymentCreationAttributes> implements UserPaymentAttributes {
    public id!: number;
    public paymentType!: string;
    paymentProvider!: string;
    accountNumber!: number;
    expiration!: string;
    createdAt!: Date;
    modifiedAt?: Date | null;
}

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
        unique: false,
    },
    paymentProvider: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    accountNumber: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    expiration: {
        type: DataTypes.STRING(5),
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
    modelName: 'userPayment',
  }
)

export default UserPayment;
