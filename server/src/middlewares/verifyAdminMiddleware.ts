import { Request, Response, NextFunction } from 'express';

const verifyAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.requestSender.isAdmin)
    res.status(500).json('User is not authorized!');
  next();
};

export default verifyAdminMiddleware;
