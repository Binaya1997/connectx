const validateUpdateProfile = ({
  username,
  bio,
}) => {

  if (
    username &&
    username.length > 50
  ) {
    return "Username cannot exceed 50 characters";
  }

  if (
    bio &&
    bio.length > 500
  ) {
    return "Bio cannot exceed 500 characters";
  }

  return null;
};

module.exports = {
  validateUpdateProfile,
};
