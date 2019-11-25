var Flight = require('../models/flight');
var Ticket = require('../models/ticket');


module.exports = {
  create: createTicket,
  show
};

function show(req,res) {
    Flight.findById(req.params.id, function(err, flights) {  
        res.render('tickets/new', {  flightId: req.params.id,
            flights
  
        });

    });
}


function createTicket(req, res) {
    req.body.flight = req.params.id;
    let ticket = new Ticket(req.body);  //makes a ticket based on the ticket schema, ticket holds a schema with data in it from our form, passing a schema into a variable doesnt make that variable inherit the schema class functionality
    Ticket.create(ticket, function(err) {  //Ticket must be capitalized to invoke mongoose model class functionality
        if(err) return res.send(err);         //creating a ticket saves it  
        console.log(ticket);
      res.redirect(`/flights/${req.params.id}`);
    })
  }
