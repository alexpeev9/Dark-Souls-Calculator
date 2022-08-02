import { IRequest, IResponse, INext } from './interface';
import logEventConfig from '../configs/logEventConfig';

const loggerMiddleware = (req: IRequest, res: IResponse, next: INext) => {
  logEventConfig(`${req.method}\t${req.url}`, 'reqLog.txt');
  next();
};

export default loggerMiddleware;
