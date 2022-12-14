import allowedOrigins from '../utils/allowedOrigins';

const credentialsMiddleware = (req: any, res: any, next: any) => {
  const origin = req.headers.origin || '';
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  next();
};

export default credentialsMiddleware;
