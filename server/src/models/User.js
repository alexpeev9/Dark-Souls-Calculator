const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../utils/envParams');
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required!'],
      index: [true, 'Username is taken!'],
      unique: true,
      validate: [
        /^[a-zA-Z0-9]+$/,
        'Username should consist of only english letters and digits',
      ],
      minLength: [3, 'Username cannot be less than 5 characters'],
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
      validate: [
        /^[a-zA-Z0-9]+$/,
        'Password should consist of only english letters and digits',
      ],
      minLength: [5, 'Password cannot be less than 5 characters'],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
userSchema.pre('save', function (next) {
  bcrypt.hash(this.password, Number(saltRounds)).then((hash) => {
    this.password = hash;
    next();
  });
});
userSchema.static('findByUsername', function (username) {
  return this.findOne({ username });
});
userSchema.method('validatePassword', function (password) {
  return bcrypt.compare(password, this.password);
});
module.exports = mongoose.model('User', userSchema);
