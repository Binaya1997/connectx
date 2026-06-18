const express = require("express");

const indexRoutes = require("./routes/v1/index.routes");
const authRoutes = require("./routes/v1/auth.routes");

const app = express();

app.use(express.json());

app.use("/api/v1", indexRoutes);
app.use("/api/v1/auth", authRoutes);

module.exports = app;
