import logEventConfig from '../configs/logEventConfig';

exports.errorResponse = (err: any) => {
  const errorMessage = err.errors
    ? Object.values(err.errors).map((val: any) => val.message)
    : [err.message];
  logEventConfig(`${err.name}: ${errorMessage}`, 'errLog.txt');
  return errorMessage;
};
