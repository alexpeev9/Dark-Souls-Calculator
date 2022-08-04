import logEventConfig from '../configs/logEventConfig';

const loggerMiddleware = (req: any, res: any, next: any) => {
  logEventConfig(`${req.method}\t${req.url}`, 'reqLog.txt');
  next();
};

export default loggerMiddleware;
