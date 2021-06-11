const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    name : { type : String},
    price : {type : Number}
});



module.exports = mongoose.model('Post',Post);