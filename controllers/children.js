const Child = require("../models/child");

module.exports = {
  index,
  show,
  new: newChildcareRequest,
  create,
};

async function index(req, res) {
  const children = await Child.find({});
  res.render("children/index", { title: "Schedule of Care Needs", children });
}

async function show(req, res) {
  const child = await Child.findById(req.params.id);
  const childFulfillmentID = child.fullfilled?._id;
  res.render("children/show", { title: "Care Request Details", child, childFulfillmentID });
}

function newChildcareRequest(req, res) {
  res.render("children/new", { title: "Request Care", errorMsg: '' });
}

async function create(req, res) {
  // convert childCare's checkbox of nothing or "on" to boolean
  req.body.childCare = !!req.body.childCare;
  // Remove empty properties so that defaults will be applied
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const child = await Child.create(req.body);
    res.redirect(`/children/${child._id}`);
  } catch (err) {
    console.log(err);
    res.render("children/new", { errorMsg: err.message });
  }
}
