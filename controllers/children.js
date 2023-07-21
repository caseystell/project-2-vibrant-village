const Child = require("../models/child");

module.exports = {
  index,
  show,
  new: newChildcareRequest,
  create,
};

async function index(req, res) {
  const children = await Child.find({});
  res.render("children/index", { title: 'Schedule of Care Needs', children });
}

async function show(req, res) {
  const child = await Child.findById(req.params.id);
  res.render('children/show', { title: 'Care Request Details', child });
}

function newChildcareRequest(req, res) {

}

function create(req, res) {

}
