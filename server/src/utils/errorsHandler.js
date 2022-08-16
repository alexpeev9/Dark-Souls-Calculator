const logEvent = require('../configs/logEventConfig');

exports.errorResponse = (err) => {
  const errorMessage = err.errors
    ? Object.values(err.errors).map((val) => val.message)
    : [err.message];
  logEvent(`${err.name}: ${errorMessage}`, 'errLog.txt');
  return errorMessage;
};
