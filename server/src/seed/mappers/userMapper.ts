import User from '../../models/User';

const adminUsername: string = process.env.ADMIN_NAME || 'admin';
const adminPassword: string = process.env.ADMIN_PWD || 'admin';

const userMapper = async () => {
  if (await User.findOne({ name: 'User' })) {
    throw new Error('Database already has users!');
  }
  const user = new User({
    username: adminUsername,
    password: adminPassword,
    isAdmin: true,
  });
  await user.save();
};

export default userMapper;
