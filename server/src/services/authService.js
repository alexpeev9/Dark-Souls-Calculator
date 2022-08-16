const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { jwtSecret } = require('../utils/envParams');

exports.register = async (username, password) => {
  if (!username || !password) throw new Error('All fields must be filled!');
  const duplicateUsername = await User.findOne({ username });
  if (duplicateUsername) throw new Error('Username is taken!');
  await User.create({
    username,
    password,
  });
  return `${username} successfully registered`;
};

exports.login = async (username, password) => {
  if (!username || !password) throw new Error('Fill All Inputs!');

  let userDb = await User.findByUsername(username);
  if (!userDb) throw new Error('Invalid Username or Password');

  let isValid = await userDb.validatePassword(password);
  if (!isValid) throw new Error('Invalid Username or Password');

  const accessToken = jwt.sign(
    {
      username: userDb.username,
      isAdmin: userDb.isAdmin,
    },
    `${jwtSecret}`,
    { expiresIn: '7d' }
  );

  return {
    accessToken,
    username: userDb.username,
    isAdmin: userDb.isAdmin,
  };
};

exports.getUsers = async () => {
  const users = await User.find().select(['username']);
  if (!users) throw new Error('No users are found!');
  return users;
};

exports.deleteUser = async (userId) => {
  const user = await User.findOne({ _id: userId });
  if (!user) throw new Error('User not found!');
  await user.deleteOne(user);
  return `${user.name} successfully deleted.`;
};
