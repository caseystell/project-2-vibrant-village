var express = require("express");
var router = express.Router();
const petsCtrl = require("../controllers/pets");
const ensureLoggedIn = require("../config/ensureLoggedIn");



module.exports = router;