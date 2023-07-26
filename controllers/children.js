const Child = require("../models/child");

module.exports = {
  index,
  show,
  new: newChildcareRequest,
  create,
  delete: deleteRequest
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
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
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

async function deleteRequest(req, res) {
  const child = await Child.findOne({ _id: req.params.id });
  if (!child) return res.redirect("/children");
  child.remove(req.params.id);
  await child.save();
  res.redirect("/children");
}