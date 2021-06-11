const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
require('dotenv/config');

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


app.use(cors());

mongoose.connect(process.env.DB_CONNECTION,{
  useUnifiedTopology: true,
  useNewUrlParser: true,
  },()=>{
  console.log("Connected to db");
})

const kitchen = require('./Models/kitchenSchema');
const addKitchen = require('./Routes/addKitchen');
app.use('/addkitchen',addKitchen);

const currentKitchen = require('./Routes/currentKitchen');
app.use('/kitchen',currentKitchen);

const updateKitchen = require('./Routes/update');
app.use('/updatekitchen',updateKitchen);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost/${port}`);
})