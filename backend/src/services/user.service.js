const {
  getUserById,
} = require("../models/user.model");

const AppError =
  require("../errors/app-error");

const httpStatus =
  require("../constants/http-status");

const getCurrentUser =
  async (id) => {

    const user =
      await getUserById(id);

    if (!user) {
      throw new AppError(
        "User not found",
        httpStatus.NOT_FOUND
      );
    }

    return user;

  };

module.exports = {
  getCurrentUser,
};
