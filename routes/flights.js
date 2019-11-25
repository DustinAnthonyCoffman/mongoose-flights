const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.index);  //   /flights/
router.get('/new', flightsCtrl.new); //   /flights/new
router.post('/', flightsCtrl.create); //    /flights/ *post
router.get('/:id', flightsCtrl.show);   //flights/:id

module.exports = router;
