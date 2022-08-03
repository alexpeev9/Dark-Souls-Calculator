import dotenv from 'dotenv';
dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,

  prodUrl: process.env.PROD_URL || 'www.google.com',
  devUrl: `http://localhost:${Number(process.env.PORT) || 5000}`,

  connectionString:
    process.env.NODE_ENV === 'production'
      ? process.env.DB_PROD_URL || ''
      : 'mongodb://localhost:27017/dark-souls-calc-db',

  saltRounds: Number(process.env.SALT_ROUNDS) || 13,
  jwtSecret: process.env.JWT_SECRET || 'SECRETJWTKEY',

  adminName: process.env.ADMIN_NAME || 'admin',
  adminPwd: process.env.ADMIN_PWD || 'admin',
};

export default env;
