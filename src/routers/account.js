const express = require('express');
const router = express.Router();

// Controller
const accountController = require("../app/controllers/account");


// => /accounts/
router.post("/login",accountController.login);


router.post("/register",accountController.register);


module.exports = router;