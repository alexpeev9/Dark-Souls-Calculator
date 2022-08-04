import allowedOrigins from '../utils/allowedOrigins';
import { Request, Response, NextFunction } from 'express';

const credentialsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  next();
};

export default credentialsMiddleware;
