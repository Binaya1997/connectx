const validateRegister = (body) => {
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return "Name, email and password are required";
  }

  return null;
};

module.exports = {
  validateRegister,
};
