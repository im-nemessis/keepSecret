const mongoose = require("mongoose");

const userSecret = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: 1
  },

  secret: {
    type: String
  }
});

Secret = new mongoose.model("Secret", userSecret);

module.exports = Secret;
