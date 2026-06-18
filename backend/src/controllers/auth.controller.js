const { validateRegister } = require("../validators/auth.validator");
const { registerUser } = require("../services/auth.service");

const asyncHandler = require("../utils/async-handler");
const AppError = require("../errors/app-error");
const httpStatus = require("../constants/http-status");

const register = asyncHandler(async (req, res) => {

  const error = validateRegister(req.body);

  if (error) {
    throw new AppError(
      error,
      httpStatus.BAD_REQUEST
    );
  }

  const user = await registerUser(req.body);

  res.status(httpStatus.CREATED).json({
    message: "User created successfully",
    data: user,
  });

});

module.exports = {
  register,
};
