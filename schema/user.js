var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  name: { type: String },
  ip: { type: String },
  city: { type: String },
  country: { type: String },
  region: { type: String },
  loc: { type: String },
  hostname: { type: String },
  org: { type: String },
  postal: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);
