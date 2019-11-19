var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
      type: String,
      enum: ['American', 'Southwest', 'United']
  },
  flightNum: {
      type: Number,
      min: 10,
      max: 9999
  },
  departs: {
      type: Date
  }
});


module.exports = mongoose.model('Flight', flightSchema); // the return value of this function is the Flight class/constructor function