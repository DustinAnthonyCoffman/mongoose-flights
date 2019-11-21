var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date
    }
  });

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
  },
  
  destination: [destinationSchema],
  
  airport: {
      default: 'AUS',
      type: String,
      enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
  }
});



module.exports = mongoose.model('Flight', flightSchema); // the return value of this function is the Flight class/constructor function