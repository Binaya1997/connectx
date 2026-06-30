const asyncHandler =
  require("../utils/async-handler");

const httpStatus =
  require("../constants/http-status");

const {
  validateUpdateProfile,
} = require(
  "../validators/user.validator"
);

const {
  getCurrentUser,
  updateCurrentUser,
} = require(
  "../services/user.service"
);

const AppError =
  require("../errors/app-error");


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

const updateMe =
  asyncHandler(
    async (
      req,
      res
    ) => {

      const error =
        validateUpdateProfile(
          req.body
        );

      if (error) {
        throw new AppError(
          error,
          httpStatus.BAD_REQUEST
        );
      }

      const user =
        await updateCurrentUser(
          req.user.id,
          req.body
        );

      res
        .status(
          httpStatus.OK
        )
        .json({
          message:
            "Profile updated successfully",
          data: user,
        });

    }
  );


module.exports = {
  getMe,
  updateMe,
};
