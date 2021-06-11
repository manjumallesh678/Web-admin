const express = require('express');
const mongoose = require('mongoose');


const router = express.Router();

const kitchen = require('../Models/kitchenSchema');

router.get('/',(req,res)=>{
   console.log("Current kitchen");
    
    kitchen.find({},(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            //console.log("success");
            res.send(result);
        }
    });
});


router.post('/edit/:userID',(req,res) =>{

    console.log(req.body.userID);
    kitchen.find({id : req.body.userID},(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

module.exports = router;
