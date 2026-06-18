const express = require("express");
const router = express.Router();

const { home, health } = require("../../controllers/index.controller");

router.get("/", home);
router.get("/health", health);

module.exports = router;
