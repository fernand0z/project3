const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    _id: Number,
    watchedEpisodes:[Number]
});

const userSchema = new mongoose.Schema({
  name: String,
  google_id: String,
  emails: {
    type: String,
    set: x => JSON.stringify(x),
    get: x => JSON.parse(x)
  },
  trackedShows: [showSchema]
});


userSchema.statics.findOrCreate = function({ id, displayName, emails }) {
  return this.findOne({ google_id: id })
    .then(user => {
      if(user) { return user; }

      return this.create({
        name: displayName,
        google_id: id,
        emails
      });
    });
}

userSchema.methods.showTracked = function(id) {
  return !!this.trackedShows.id(id);
}

userSchema.methods.addShow = function(id) {
  if(this.showTracked(id)) return;
  this.trackedShows.push({ _id: id, episodes: [] });
  this.save();
  return this;
}

userSchema.methods.removeShow = function(id) {
  this.trackedShows.id(id).remove();
  this.save();
  return this;
}

userSchema.methods.patchEpisode = function(id, episode, seen) {
  const show = this.trackedShows.id(id);
  if(!show) return;

  show.watchedEpisodes =
    show.watchedEpisodes.filter(n => n !== parseInt(episode));
  if(seen) {
    show.watchedEpisodes.push(episode);
  }

  this.save();
}

module.exports = mongoose.model('User', userSchema);