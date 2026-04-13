const mongoose = require('mongoose');

const WaitlistUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ['Talent', 'Mentor', 'Partner', 'Investor', 'Other'],
    default: 'Other'
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('WaitlistUser', WaitlistUserSchema);
