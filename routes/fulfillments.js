var express = require("express");
var router = express.Router();
const fulfillmentsCtrl = require("../controllers/fulfillments");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// All routes start with /

// GET /children/:id/fulfillments/new
router.get("/children/:id/fulfillments/new", ensureLoggedIn, fulfillmentsCtrl.new);
// GET /children/:id (show functionality)
router.get("/children/:id/fulfillments", ensureLoggedIn, fulfillmentsCtrl.show);
// POST /children/:id/fulfillments
router.post("/children/:id/fulfillments", ensureLoggedIn, fulfillmentsCtrl.create);
// DELETE /fulfillments
router.delete("/fulfillments/:id", ensureLoggedIn, fulfillmentsCtrl.delete);

module.exports = router;