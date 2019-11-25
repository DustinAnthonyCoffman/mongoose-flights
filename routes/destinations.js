var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create); 
 //this url is not actually a page! its the route for the controller of destinations

module.exports = router;