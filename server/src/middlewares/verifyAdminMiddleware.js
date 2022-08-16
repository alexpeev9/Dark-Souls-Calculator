const verifyAdmin = (req, res, next) => {
  if (!req.body.requestSender.isAdmin)
    res.status(500).json('User is not authorized!');
  next();
};

module.exports = verifyAdmin;
