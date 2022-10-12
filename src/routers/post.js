const express = require('express');
const router = express.Router();

// Controller
const postController = require("../app/controllers/post");

router.get("/location",postController.getLocation);


module.exports = router;