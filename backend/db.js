const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

// Connect function
const connectToMongo =()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('Mongoose connected successfully');
    })    
} 

module.exports = connectToMongo;
