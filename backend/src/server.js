require("dotenv").config();

const app = require("./app");
const config = require("./config");
const pool = require("./database");

app.listen(config.PORT, "0.0.0.0", async () => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed");
    console.error(error.message);
  }

  console.log(`Server running on port ${config.PORT}`);
});
