const express = require("express");
const cors = require("cors");

const indexRoutes = require("./routes/v1/index.routes");
const authRoutes = require("./routes/v1/auth.routes");
const userRoutes = require("./routes/v1/user.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

// Allow frontend requests
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.use("/api/v1", indexRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

/*
|--------------------------------------------------------------------------
| Error Handler
|--------------------------------------------------------------------------
*/

app.use(errorMiddleware);

module.exports = app;
