require('dotenv').config();
module.exports = {
  nodeENV: process.env.NODE_ENV,
  port: process.env.PORT,
  clientPort: process.env.CLIENT_PORT,
  dbPROD: process.env.DB_HOST_PROD,
  dbDEV: process.env.DB_HOST_DEV,
  jwtSecret: process.env.JWT_SECRET,
  authPass: process.env.AUTH_PASS,
  prodUrl: process.env.PRODURL,
  saltRounds: process.env.SALT_ROUNDS,
};
