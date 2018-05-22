const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  google_id: String,
  emails: {
    type: String,
    set: x => JSON.stringify(x),
    get: x => JSON.parse(x)
  }
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

module.exports = mongoose.model('User', userSchema);