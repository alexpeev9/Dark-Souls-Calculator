const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../utils/envParams');
// const verifyToken = (req, res, next) => {
//   const authHeader = req.headers.authorization || req.headers.Authorization;
//   if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
//   const token = authHeader.split(' ')[1];
//   console.log(token);
//   jwt.verify(token, jwtSecret, (err, decoded) => {
//     if (err) return res.sendStatus(403).json(`Error: ${err.message}`);
//     req.user = decoded.user.username;
//     req.user = decoded.user.isAdmin;

//     next();
//   });
// };

const verifyToken = (req, res, next) => {
  const token = req.cookies['JWT'];

  if (token) {
    try {
      req.body.requestSender = jwt.verify(token, jwtSecret);
      return next();
    } catch (e) {
      res.clearCookie(token);
      return res.status(401).json('Unauthorized!');
    }
  }
  return res.status(401).json('You must be logged!');
};
module.exports = verifyToken;
