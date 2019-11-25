var Flight = require('../models/flight');
var Ticket = require('../models/ticket');
module.exports = {
  create
};
//this is the destination controller for all functionality of the flights/:id

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    flight.destination.push(req.body);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}

