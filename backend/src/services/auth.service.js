const argon2 = require("argon2");

const {
  createUser,
  getUserByEmail,
} = require("../models/user.model");

const registerUser = async ({ name, email, password }) => {

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
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
