var express = require("express");
var router = express.Router();
const childrenCtrl = require("../controllers/children");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /children
router.get("/children", childrenCtrl.index);
// GET /children/new
router.get("/children/new", ensureLoggedIn, childrenCtrl.new);
// GET /children/:id (show functionality)
router.get("/children/:id", childrenCtrl.show);
// POST /children
router.post("/children", ensureLoggedIn, childrenCtrl.create);

module.exports = router;