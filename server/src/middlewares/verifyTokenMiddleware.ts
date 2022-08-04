import jwt from 'jsonwebtoken';

import env from '../env';
import { Request, Response, NextFunction } from 'express';

const verifyTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
