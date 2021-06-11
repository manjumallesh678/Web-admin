const mongoose = require('mongoose');

const kitchenSchema = mongoose.Schema({
    id : Number,
    name : String,
    rate : Number,
    email : String,
    number : Number,
    price : Number,
    type : {
        northEastern : Boolean,
        bengali : Boolean,
        kashmiri : Boolean,
        southIndian : Boolean,
        punjabi : Boolean,
        maharashtrian : Boolean,
        bihari : Boolean,
        gujurati : Boolean,
        rajasthani : Boolean,
    },
    time : {
        breakFast : {
            orderFrom : String,
            orderTo : String
        },
        lunch : {
            orderFrom : String,
            orderTo : String
        },
        highTea : {
            orderFrom : String,
            orderTo : String
        },
        dinner : {
            orderFrom : String,
            orderTo : String
        }
    }

});

module.exports = mongoose.model('Kitchen',kitchenSchema);