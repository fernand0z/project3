const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
    id: Number,
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
  return this.trackedShows.filter(show => show.id === id).length !== 0;
}

userSchema.methods.addShow = function(id) {
  if(this.showTracked(id)) return;
  this.trackedShows.push({id, episodes: []});
  return this;
}

userSchema.methods.removeShow = function(id) {
  if(!this.showTracked(id)) return;
  this.trackedShows = this.trackedShows.filter(show => show.id !== id);
  this.save();
  return this;
}

module.exports = mongoose.model('User', userSchema);