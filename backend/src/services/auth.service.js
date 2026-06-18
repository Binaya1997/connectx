const argon2 = require("argon2");

const {
  createUser,
  getUserByEmail,
} = require("../models/user.model");

const AppError = require("../errors/app-error");
const httpStatus = require("../constants/http-status");

const registerUser = async ({ name, email, password }) => {

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new AppError(
      "Email already exists",
      httpStatus.CONFLICT
    );
  }

  const hashedPassword = await argon2.hash(password);

  return await createUser({
    name,
    email,
    password: hashedPassword,
  });
};

module.exports = {
  registerUser,
};
