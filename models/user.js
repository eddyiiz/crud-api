const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  job: {
    type: String,
    required: true,
  },

  joiningDate: {
    type: String,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Users", userSchema);
