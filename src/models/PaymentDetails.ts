import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/connection';

interface PaymentDetailsAttributes {
    id: number;
    orderNumber: number;
    amountInCents: number;
    paymentProvider: string;
    orderStatus: string;
    createdAt: Date;
    modifiedAt?: Date | null;
}

interface PaymentDetailsCreationAttributes extends Optional<PaymentDetailsAttributes, 'id'> {}

class PaymentDetails extends Model<PaymentDetailsAttributes, PaymentDetailsCreationAttributes> implements PaymentDetailsAttributes {
    public id!: number;
    public orderNumber!: number;
    public amountInCents!: number;
    public paymentProvider!: string;
    public orderStatus!: string;

    // timestamps
    public readonly createdAt!: Date;
    public modifiedAt?: Date | null;
}

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
        allowNull: true,
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

export default PaymentDetails;
