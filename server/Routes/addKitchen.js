const express = require('express');
const router = express.Router();


const Post = require('../Models/Post');

const Kitchen = require('../Models/kitchenSchema');

router.post('/',(req,res)=>{
    console.log(req.body);
    const kitchen = new Kitchen({
        id : req.body.id,
        name : req.body.name,
        rate : req.body.rate,
        email : req.body.email,
        number : req.body.number,
        price : req.body.price,
        type : {
            northEastern : req.body.type.northEastern,
            bengali : req.body.type.bengali,
            kashmiri : req.body.type.kashmiri,
            southIndian : req.body.type.southIndian,
            punjabi : req.body.type.punjabi,
            maharashtrian : req.body.type.maharashtrian,
            bihari : req.body.type.bihari,
            gujurati : req.body.type.gujurati,
            rajasthani : req.body.type.rajasthani

        },
        time : {
            breakFast : {
                orderFrom : req.body.time.breakFast.orderFrom,
                orderTo : req.body.time.breakFast.orderTo
            },
            lunch : {
                orderFrom : req.body.time.lunch.orderFrom,
                orderTo : req.body.time.lunch.orderTo
            },
            highTea : {
                orderFrom : req.body.time.highTea.orderFrom,
                orderTo : req.body.time.highTea.orderTo
            },
            dinner : {
                orderFrom : req.body.time.dinner.orderFrom,
                orderTo : req.body.time.dinner.orderTo
            }
        }
    });
    
    kitchen.save().then(() => console.log("Saved new kitchen"));
});

module.exports = router;