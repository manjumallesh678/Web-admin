const express = require('express');
const mongoose = require('mongoose');


const router = express.Router();

const kitchen = require('../Models/kitchenSchema');

router.post("/",(req,res)=>{
    //console.log(req.body);
    const id = req.body.id;

    kitchen.findOneAndUpdate({id : id},{$set :req.body},{new : true},(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("success");
        }
    });

   
});

module.exports = router;