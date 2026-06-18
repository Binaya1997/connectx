const { validateRegister } = require("../validators/auth.validator");
const { registerUser } = require("../services/auth.service");

const register = async (req, res) => {

  try {

    const error = validateRegister(req.body);

    if (error) {
      return res.status(400).json({
        message: error,
      });
    }

    const user = await registerUser(req.body);

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });

  } catch (error) {

    res.status(409).json({
      message: error.message,
    });

  }

};

module.exports = {
  register,
};
