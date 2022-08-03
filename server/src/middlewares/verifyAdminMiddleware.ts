import { IRequest, IResponse, INext } from '../interfaces/vendors';

const verifyAdminMiddleware = (req: IRequest, res: IResponse, next: INext) => {
  if (!req.body.requestSender.isAdmin)
    res.status(500).json('User is not authorized!');
  next();
};

export default verifyAdminMiddleware;
