const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
//if the server request made it to here, then just specify the rest of the url, 
//tickets/ is already part of the path because of its url origin ref="/tickets/new">

router.get('/flights/:id/tickets/new', ticketsCtrl.show);  
router.post('/flights/:id/tickets', ticketsCtrl.create);  



module.exports = router;
