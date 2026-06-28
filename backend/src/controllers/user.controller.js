const asyncHandler =
  require("../utils/async-handler");

const httpStatus =
  require("../constants/http-status");

const {
  getCurrentUser,
} = require("../services/user.service");

const getMe =
  asyncHandler(async (
    req,
    res
  ) => {

    const user =
      await getCurrentUser(
        req.user.id
      );

    res
      .status(httpStatus.OK)
      .json({
        data: user,
      });

  });

module.exports = {
  getMe,
};
