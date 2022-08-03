import env from '../../env';
import User from '../../models/User';

const userMapper = async (): Promise<void> => {
  if (await User.findOne({ name: 'User' })) {
    throw new Error('Database already has users!');
  }
  const user = new User({
    username: env.adminName,
    password: env.adminPwd,
    isAdmin: true,
  });
  await user.save();
};

export default userMapper;
