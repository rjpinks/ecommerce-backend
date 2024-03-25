import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/connection';
import UserPayment from './UserPayment';
import UserAddress from './UserAddress'

interface UserProfileAttributes {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    addressId?: number | null;
    userPaymentId?: number | null;
    createdAt: Date;
    modifiedAt?: Date | null;
}

interface UserProfileCreationAttributes extends Optional<UserProfileAttributes, 'id'> {}

class UserProfile extends Model<UserProfileAttributes, UserProfileCreationAttributes> implements UserProfileAttributes {
    public id!: number;
    public email!: string;
    public password!: string;
    public firstName!: string;
    public lastName!: string;
    // foreign keys
    public addressId!: number | null;
    public userPaymentId!: number | null;

    // timestamps
    public modifiedAt?: Date | null;
    public readonly createdAt!: Date;


    public static associate() {
        UserProfile.belongsTo(UserAddress, { foreignKey: 'addressId' });
        UserProfile.belongsTo(UserPayment, { foreignKey: 'userPaymentId' });
      }
}

// set up fields and rules for UserProfile model
UserProfile.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    addressId: {
        type: DataTypes.INTEGER,
        //foriegnKey goes here
        references: {
            model: "userAddress",
            key: "id"
        },
        allowNull: true,
    },
    userPaymentId: {
        type: DataTypes.INTEGER,
        references: {
            model: "userPayment",
            key: "id"
        },
        allowNull: true
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
    modelName: 'userProfile',
  }
)

export default UserProfile;
