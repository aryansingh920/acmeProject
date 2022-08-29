const express = require("express");
const router = express.Router();
const middleware = require("./middleware.js");

router
    .get("/home", (middleware.home_get))
    .get("/sendotp",middleware.sendotp)



module.exports = router;