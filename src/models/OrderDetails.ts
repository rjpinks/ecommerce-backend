// import important parts of sequelize library
import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/connection';
import UserProfile from './UserProfile';
import PaymentDetails from './PaymentDetails';

interface OrderDetailsAttributes {
    id: number;
    totalInCents: number;
    userProfileId?: number | null;
    paymentDetailsId?: number | null;
    createdAt: Date;
    modifiedAt?: Date | null;
}

interface OrderDetailsCreationAttributes extends Optional<OrderDetailsAttributes, 'id'> {}

class OrderDetails extends Model<OrderDetailsAttributes, OrderDetailsCreationAttributes> implements OrderDetailsAttributes {
    public id!: number;
    public totalInCents!: number;
    // foreign keys
    public userProfileId?: number | null;
    public paymentDetailsId?: number | null;
    
    // timestamps
    public readonly createdAt!: Date;
    public modifiedAt?: Date | null;

    public static associate() {
        OrderDetails.belongsTo(UserProfile, { foreignKey: "userProfileId" });
        OrderDetails.belongsTo(PaymentDetails, { foreignKey: "paymentDetailsId" });
    }
}

OrderDetails.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    totalInCents: {
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
    userProfileId: {
        type: DataTypes.INTEGER,
        //foriegnKey goes here
        references: {
            model: "userProfile",
            key: "id"
        },
        allowNull: true
    },
    paymentDetailsId: {
        type: DataTypes.INTEGER,
        references: {
            model: "paymentDetails",
            key: "id"
        },
        allowNull: true
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderDetails',
  }
)

export default OrderDetails;
