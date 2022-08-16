const { clientPort, prodUrl } = require('../utils/envParams');
const allowedOrigins = [`http://localhost:${clientPort}`, `${prodUrl}`];
module.exports = allowedOrigins;
