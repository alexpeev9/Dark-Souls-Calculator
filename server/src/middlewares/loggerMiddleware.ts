import { Request, Response, NextFunction } from 'express';
import logEventConfig from '../configs/logEventConfig';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logEventConfig(`${req.method}\t${req.url}`, 'reqLog.txt');
  next();
};

export default loggerMiddleware;
