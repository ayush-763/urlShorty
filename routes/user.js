const express = require("express");
const { handleUserSignUp, handleUserLogIn } = require("../controllers/user.js");
const router = express.Router();

router.post("/", handleUserSignUp);
router.post("/login", handleUserLogIn);

module.exports = router;
