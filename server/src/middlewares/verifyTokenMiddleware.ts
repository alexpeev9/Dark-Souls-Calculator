import jwt from 'jsonwebtoken';

import env from '../env';
import { IRequest, IResponse, INext } from '../interfaces/vendors';

const verifyTokenMiddleware = (req: IRequest, res: IResponse, next: INext) => {
  const token = req.cookies['JWT'];

  if (token) {
    try {
      req.body.requestSender = jwt.verify(token, env.jwtSecret || 'TestSecret');
      return next();
    } catch (e) {
      res.clearCookie(token);
      return res.status(401).json('Unauthorized!');
    }
  }
  return res.status(401).json('You must be logged!');
};

export default verifyTokenMiddleware;
