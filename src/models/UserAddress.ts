import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/connection';

interface UserAddressAttributes {
    id: number;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    postalCode: number;
    country: string;
    telephone: string;
    modifiedAt?: Date | null;
}

interface UserAddressCreationAttributes extends Optional<UserAddressAttributes, 'id'> {}

class UserAddress extends Model<UserAddressAttributes, UserAddressCreationAttributes> implements UserAddressAttributes {
    public id!: number;
    public addressLine1!: string;
    public addressLine2?: string | null;
    public city!: string;
    public postalCode!: number;
    public country!: string;
    public telephone!: string;

    // timestamp
    public modifiedAt?: Date | null;
}

// set up fields and rules for UserAddress model
UserAddress.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    addressLine1: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    addressLine2: {
        type: DataTypes.STRING(20),
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    postalCode: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telephone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    modifiedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userAddress',
  }
)

export default UserAddress;
