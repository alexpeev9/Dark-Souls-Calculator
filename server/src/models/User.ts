import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

import env from '../env';
import IUser from '../interfaces/entities/IUser';

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
      minLength: [4, 'Username cannot be less than 4 characters'],
      maxLength: [11, 'Username cannot be more than 11 characters'],
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      validate: [
        /^[a-zA-Z0-9]+$/,
        'Password should consist of only english letters and digits',
      ],
      minLength: [4, 'Password cannot be less than 4 characters'],
      maxLength: [11, 'Password cannot be more than 11 characters'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', function (next) {
  bcrypt.hash(this.password, env.saltRounds).then((hash) => {
    this.password = hash;
    next();
  });
});

// Custom Methods

UserSchema.methods.comparePasswords = (
  candidatePassword: string,
  dbPassword: string
): Promise<boolean> => {
  const isValid: Promise<boolean> = bcrypt.compare(
    candidatePassword,
    dbPassword
  );
  return isValid;
};

const User = model<IUser>('User', UserSchema);

export default User;
