const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema({
  title: { type: String, required: true },
  season: { type: Number, required: true },
  episodeNumber: { type: Number, required: true },
  airdate: { type: Date, required: false },
  watched: { type: Boolean, default: false },
});

const Article = module.exports = mongoose.model("EpisodeCard", episodeSchema);