const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  });
  
  module.exports = mongoose.model('Contact', contactSchema);