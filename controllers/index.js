var Flight = require('../models/flight');

function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render('index', {
           title: 'Mongoose Flights'

        })
    })
}



module.exports = {
    index
}