const Pet = require("../models/pet");

module.exports = {
  index,
  show,
  new: newPetcareRequest,
  create,
};

async function index(req, res) {
  const pets = await Pet.find({});
  res.render("children/index", { title: "Schedule of Care Needs", pets });
}

async function show(req, res) {
  const pet = await Pet.findById(req.params.id);
  res.render("children/show", { title: "Care Request Details", pet });
}

function newPetcareRequest(req, res) {
  res.render("children/new", { title: "Request Care", errorMsg: '' });
}

async function create(req, res) {
  // convert childCare's checkbox of nothing or "on" to boolean
  req.body.petCare = !!req.body.petCare;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const pet = await Pet.create(req.body);
    res.redirect(`/children/${child._id}`);
  } catch (err) {
    console.log(err);
    res.render("children/new", { errorMsg: err.message });
  }
}
