import jwt from 'jsonwebtoken';

import { IRequest, IResponse, INext } from './interface';

const verifyTokenMiddleware = (req: IRequest, res: IResponse, next: INext) => {
  const token = req.cookies['JWT'];

  if (token) {
    try {
      req.body.requestSender = jwt.verify(
        token,
        process.env.JWT_SECRET || 'TestSecret'
      );
      return next();
    } catch (e) {
      res.clearCookie(token);
      return res.status(401).json('Unauthorized!');
    }
  }
  return res.status(401).json('You must be logged!');
};

export default verifyTokenMiddleware;
