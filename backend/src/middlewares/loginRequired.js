import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(401).json({
      errors: [`Login is required`],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const data = jwt.verify(token, process.env.TOKEN);

    const { id, email } = data;

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch(e) {
    return res.status(401).json({
      errors: [`Token is expired or it is invalid`],
    });
  }
};
