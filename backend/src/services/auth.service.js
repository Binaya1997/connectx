const argon2 = require("argon2");

const {
  createUser,
  getUserByEmail,
} = require("../models/user.model");

const AppError = require("../errors/app-error");
const httpStatus = require("../constants/http-status");

const { generateToken } = require("../utils/jwt");

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

const loginUser = async ({ email, password }) => {

  const user = await getUserByEmail(email);

  if (!user) {
    throw new AppError(
      "Invalid credentials",
      httpStatus.UNAUTHORIZED
    );
  }

  const isPasswordValid = await argon2.verify(
    user.password,
    password
  );

  if (!isPasswordValid) {
    throw new AppError(
      "Invalid credentials",
      httpStatus.UNAUTHORIZED
    );
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  return {
    token,
  };

};

module.exports = {
  registerUser,
  loginUser,
};
