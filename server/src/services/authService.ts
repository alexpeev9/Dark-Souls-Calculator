import jwt from 'jsonwebtoken';
import User from '../models/User';

const register = async (username: string, password: string) => {
  if (!username || !password) throw new Error('All fields must be filled!');

  const duplicateUsername = await User.findOne({ username });
  if (duplicateUsername) throw new Error(`${username} is taken.`);

  await User.create({
    username,
    password,
  });
  return `${username} successfully registered`;
};

const login = async (username: string, password: string) => {
  if (!username || !password) throw new Error('Fill All Inputs!');

  let userDb = await User.findOne({ username });
  if (!userDb) throw new Error('Invalid Username or Password');

  let isValid = await userDb.comparePasswords(password, userDb.password);
  if (!isValid) throw new Error('Invalid Username or Password');

  const accessToken = jwt.sign(
    {
      username: userDb.username,
      isAdmin: userDb.isAdmin,
    },
    `${process.env.JWT_SECRET}`,
    { expiresIn: '7d' }
  );

  return {
    accessToken,
    username: userDb.username,
    isAdmin: userDb.isAdmin,
  };
};

const getUsers = async () => {
  const users = await User.find().select(['username']);
  if (!users) throw new Error('No users are found!');
  return users;
};

const deleteUser = async (userId: string, currUserName: string) => {
  const currUser = await User.findOne({ username: currUserName });
  const user = await User.findOne({ _id: userId });

  if (!user) throw new Error('User not found!');
  if (currUser == user) throw new Error('User cannot delete himself!');

  await user.deleteOne(user._id);

  return `${user.username} successfully deleted.`;
};

export default { register, login, getUsers, deleteUser };
