const AppError = require("../errors/app-error");
const httpStatus = require("../constants/http-status");
const { verifyToken } = require("../utils/jwt");

const authMiddleware = (
  req,
  res,
  next
) => {

  const authHeader =
    req.headers.authorization;

  if (!authHeader) {
    return next(
      new AppError(
        "Authorization header missing",
        httpStatus.UNAUTHORIZED
      )
    );
  }

  const token =
    authHeader.split(" ")[1];

  if (!token) {
    return next(
      new AppError(
        "Token missing",
        httpStatus.UNAUTHORIZED
      )
    );
  }

  try {

    const decoded =
      verifyToken(token);

    req.user = decoded;

    next();

  } catch {

    return next(
      new AppError(
        "Invalid token",
        httpStatus.UNAUTHORIZED
      )
    );

  }

};

module.exports =
  authMiddleware;
