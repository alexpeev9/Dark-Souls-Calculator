import logEventConfig from '../configs/logEventConfig';

const errorHandler = (err: any) => {
  const errorMessage = err.errors
    ? Object.values(err.errors).map((val: any) => val.message)
    : [err.message];
  logEventConfig(`${err.name}: ${errorMessage}`, 'errLog.txt');
  return errorMessage;
};

export default errorHandler;
