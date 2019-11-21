var Flight = require('../models/flight');

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

function show(req,res) {
    Flight.findById(req.params.id, function(err, flights) {
        res.render('flights/show', { title: 'Flight Details', flights });
      });
    }

function addDestination(req,res) {

}

module.exports = {
    create,
    new: newFlight,
    update: addDestination,
    show,
    index
}