const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  phoneName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});


let Mobile = mongoose.model('Mobile', mobileSchema);
 
module.exports = Mobile;
