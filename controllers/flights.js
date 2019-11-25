var Flight = require('../models/flight');
var Ticket = require('../models/ticket');

function index(req,res) {
    Flight.find({}, function(err, flights) {  //finding all flights, call back is rendering page and giving it the flights data
        res.render('flights/index', {   //res.render takes a destination and passes out an object, we have access to that object because of find({})
            flights                     //flights.find({}, function(err, flights)) ? ? ?
        });

    })
}

function create(req,res) {
    let flight = new Flight(req.body);  //made new flight based on our schema with form data
    flight.save(function(err) {   //saves form data to our database
        if (err) return res.render('flights/new'); //error handling goes back to form page
        res.redirect('flights');            //redirects to view/index after form is submitted
    });
}

function newFlight(req,res) {
    res.render('flights/new');          //res.render('views/')
}

function show(req,res) {            //this is a nested query, we find the flight and find the ticket associated with the flight and then make them both available for the view render
    Flight.findById(req.params.id, function(err, flights) {  //flights is the result of our find
        Ticket.find({flight: flights._id}, function(err, tickets) { //tickets is the result of our find
            res.render('flights/show', { title: 'Flight Details', flights, tickets });
        })
      });
    }



module.exports = {
    create,
    new: newFlight,
    show,
    index
}