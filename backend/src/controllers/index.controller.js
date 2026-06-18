const home = (req, res) => {
  res.status(200).json({
    message: "Welcome to ConnectX API",
  });
};

const health = (req, res) => {
  res.status(200).json({
    status: "UP",
  });
};

module.exports = {
  home,
  health,
};
