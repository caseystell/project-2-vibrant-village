const Child = require("../models/child");
const Pet = require("../models/pet");

module.exports = {
  create,
  new: newFulfillment,
  delete: deleteRequest,
};

async function newFulfillment(req, res) {
  const child = await Child.findById(req.params.id);
  res.render("fulfillments/new", { title: "Fulfill Care Request", child, errorMsg: '' });
}

async function create(req, res) {
  const child = await Child.findById(req.params.id);
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  child.fulfilled.push(req.body);
  try {
    await child.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/children/${child._id}`);
}

async function deleteRequest(req, res) {
  const child = await Child.findOne({ "fulfillments._id": req.params.id, "fulfillments.user": req.user._id });
  if (!child) return res.redirect("/children");
  child.fulfilled.remove(req.params.id);
  await child.save();
  res.redirect(`/children/${child._id}`);
}
