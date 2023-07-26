var express = require("express");
var router = express.Router();
const childrenCtrl = require("../controllers/children");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// All routes start with /children

// GET /children
router.get("/", ensureLoggedIn, childrenCtrl.index);
// GET /children/new
router.get("/new", ensureLoggedIn, childrenCtrl.new);
// GET /children/:id (show functionality)
router.get("/:id", ensureLoggedIn, childrenCtrl.show);
// POST /children
router.post("/", ensureLoggedIn, childrenCtrl.create);
// DELETE /children
router.delete("/:id", ensureLoggedIn, childrenCtrl.delete);

module.exports = router;