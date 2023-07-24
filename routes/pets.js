var express = require("express");
var router = express.Router();
const petsCtrl = require("../controllers/pets");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// All routes start with /pets

// GET /pets
router.get("/", ensureLoggedIn, petsCtrl.index);
// GET /pets/new
router.get("/new", ensureLoggedIn, petsCtrl.new);
// GET /pets/:id (show functionality)
router.get("/:id", ensureLoggedIn, petsCtrl.show);
// POST /pets
router.post("/", ensureLoggedIn, petsCtrl.create);

module.exports = router;