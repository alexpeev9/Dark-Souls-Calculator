import allowedOrigins from '../utils/allowedOrigins';
import { IRequest, IResponse, INext } from './interface';

const credentialsMiddleware = (req: IRequest, res: IResponse, next: INext) => {
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  next();
};

export default credentialsMiddleware;
