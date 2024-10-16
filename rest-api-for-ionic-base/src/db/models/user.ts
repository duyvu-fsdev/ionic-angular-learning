import { DataTypes, Model, Optional } from 'sequelize';
import connection from '../../config/dbConnect';

interface UserAttributes {
 id?: number;
 email?: string;
 password?: string;
 name?: string;
 phoneNumber?: number | null;
 gender?: string | null;
 address?: string | null;
 avatarUrl?: string | null;
 role?: string | null;

 createdAt?: Date;
 updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
 public id!: number;
 public email!: string;
 public password!: string;
 public name!: string;
 public phoneNumber!: number | null;
 public gender!: string | null;
 public address!: string | null;
 public avatarUrl!: string | null;
 public role!: string | null;

 public readonly createdAt!: Date;
 public readonly updatedAt!: Date;
}

User.init(
 {
  id: {
   primaryKey: true,
   autoIncrement: true,
   allowNull: false,
   type: DataTypes.INTEGER,
  },
  email: { unique: true, allowNull: false, type: DataTypes.STRING },
  password: { allowNull: false, type: DataTypes.STRING },
  name: { allowNull: false, type: DataTypes.STRING },
  phoneNumber: { unique: true, type: DataTypes.INTEGER },
  gender: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  avatarUrl: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING },
 },
 { timestamps: true, sequelize: connection, underscored: false },
);
export default User;
