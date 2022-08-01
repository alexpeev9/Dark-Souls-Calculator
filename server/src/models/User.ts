import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

import IUser from './interfaces/IUser';

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: [true, 'Username is required!'],
      unique: true,
      validate: [
        /^[a-zA-Z0-9]+$/,
        'Username should consist of only english letters and digits',
      ],
      minLength: [3, 'Username cannot be less than 3 characters'],
      maxLength: [15, 'Username cannot be more than 15 characters'],
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      validate: [
        /^[a-zA-Z0-9]+$/,
        'Password should consist of only english letters and digits',
      ],
      minLength: [5, 'Password cannot be less than 5 characters'],
      maxLength: [15, 'Password cannot be more than 15 characters'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, Number(process.env.SALT_ROUNDS)).then((hash) => {
    this.password = hash;
    next();
  });
});

// Custom Methods

// Get user by username
UserSchema.methods.findByUsername = function (
  username: string
): Promise<IUser> {
  const user: Promise<IUser> = this.findOne({ username });
  return user;
};

// Check if passwords match
UserSchema.methods.comparePassword = function (
  password: string
): Promise<boolean> {
  const isValid: Promise<boolean> = bcrypt.compare(password, this.password);
  return isValid;
};

const User = model<IUser>('User', UserSchema);

export default User;
