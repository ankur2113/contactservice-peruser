const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contacts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contact'
  }]
});

module.exports = mongoose.model('User', userSchema);