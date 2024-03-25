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
    createdAt: Date;
    modifiedAt: Date;
    addressId?: number | null;
    userPaymentId?: number | null;
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
    public modifiedAt!: Date;
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
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    modifiedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    addressId: {
        type: DataTypes.INTEGER,
        //foriegnKey goes here
        references: {
            model: "userAddressId",
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
    }
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
