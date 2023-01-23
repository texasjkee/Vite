const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const testPdrSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genters: [String],
  rating: Number,
  duration: {
    hours: Number,
    minutes: Number,
  },
  reviews: [{
    name: String,
    text: String,
  }],
});

const testPDR = mongoose.model('testpdr__', testPdrSchema);

module.exports = testPDR;