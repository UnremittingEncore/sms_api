const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise;

const messageSchema = new mongoose.Schema({
  from: {
    type: Number,
    required: true,
  },
  to: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  //{ versionKey: false }
});

const message = mongoose.model("message", messageSchema);
module.exports = message