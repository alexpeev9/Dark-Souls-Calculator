const verifyAdminMiddleware = (req: any, res: any, next: any) => {
  if (!req.body.requestSender.isAdmin)
    res.status(500).json('User is not authorized!');
  next();
};

export default verifyAdminMiddleware;
