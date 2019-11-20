var Flight = require('../models/flight');

function create(req,res) {
    let flight = new Flight(req.body);  //made new flight based on our schema with form data
    flight.save(function(err) {   //saves form data to our database
        if (err) return res.render('flights/new'); //error handling
        res.redirect('flights');            //redirects to view/index
    });
}

function newFlight(req,res) {
    res.render('flights/new');
}

function index(req,res) {
    Flight.find({}, function(err, flights) {  //finding all flights, call back is rendering page and giving it the flights data
        res.render('flights/index', {   //res.render takes a destination and passes out an object, we have access to that object because of find({})
            flights
        });

    })
}

module.exports = {
    create,
    new: newFlight,
    index
}