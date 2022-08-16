const logEvent = require('../configs/logEventConfig');
const logger = (req, res, next) => {
  logEvent(`${req.method}\t${req.url}`, 'reqLog.txt');
  next();
};
module.exports = logger;
