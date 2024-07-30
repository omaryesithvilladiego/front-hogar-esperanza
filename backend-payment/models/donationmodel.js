// server/models/donationModel.js
const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  amount: Number,
  message: String,
  donationDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);