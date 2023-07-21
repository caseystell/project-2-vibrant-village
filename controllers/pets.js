const Pet = require("../models/pet");

module.exports = {
  index,
  show,
  new: newPetcareRequest,
  create,
};

async function index(req, res) {
  const pets = await Pet.find({});
  res.render("pets/index", { title: 'Schedule of Care Needs', pets });
}

async function show(req, res) {
  const pet = await Pet.findById(req.params.id);
  res.render('pets/show', { title: 'Care Request Details', pet });
}

function newPetcareRequest(req, res) {

}

function create(req, res) {

}