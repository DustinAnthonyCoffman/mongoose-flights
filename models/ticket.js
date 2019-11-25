var mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ticketSchema = new Schema ({

    seat:  {
        type: String, 
        match: /[A-F][1-9]\d?/
    },

    price: {
        type: Number,
        min: 0
    },
    flight: { 
        type: Schema.Types.ObjectId, 
        ref: 'Flight' 
    }
    
})





module.exports = mongoose.model('Ticket', ticketSchema);

//mongoose.model('modelName')   <--an instance of mongoose object with all the mongoose functionality
//ticketSchema will be referenced under the modelname 
//consolelog Ticket it should have new, create, save etc.
