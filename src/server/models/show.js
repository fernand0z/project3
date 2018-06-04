const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
  title: { type: String, required: true },
  status: { type: String, required: false },
  day: { type: String, required: false },
  time: { type: String, required: false },
  saved: { type: Boolean, default: false },
});

const Article = module.exports = mongoose.model("ShowCard", showSchema);