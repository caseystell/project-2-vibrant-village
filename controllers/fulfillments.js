const Child = require("../models/child");

module.exports = {
  show,
  create,
  new: newFulfillment,
  delete: deleteRequest,
};

async function show(req, res) {
  const child = await Child.findById(req.params.id);
  const fulfillmentID = child.fullfilled?._id
  res.render("fulfillments/show", { title: "Care Provider Details", child, fulfillmentID });
}

async function newFulfillment(req, res) {
  const child = await Child.findById(req.params.id);
  res.render("fulfillments/new", { title: "Provide Care", child, errorMsg: '' });
}

async function create(req, res) {
  const child = await Child.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  child.fulfilled.push(req.body);
  try {
    await child.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/children/${child._id}`);
}

async function deleteRequest(req, res) {
  const child = await Child.findOne({ "fulfilled._id": req.params.id, "fulfilled.user": req.user._id });
  child.fulfilled.remove(req.params.id);
  await child.save();
  res.redirect(`/children/${child._id}`);
}
