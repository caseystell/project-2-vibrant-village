var express = require("express");
var router = express.Router();
const fulfillmentsCtrl = require("../controllers/fulfillments");
const ensureLoggedIn = require("../config/ensureLoggedIn");

module.exports = router;