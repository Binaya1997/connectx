const httpStatus = require("../constants/http-status");

const errorMiddleware = (err, req, res, next) => {

  const statusCode =
    err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  res.status(statusCode).json({
    success: false,
    message: err.message,
  });

};

module.exports = errorMiddleware;
