const mongoose = require('mongoose');


const uri = process.env.MONGODBURL; 
module.exports.connect=()=>{
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start your application logic here
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
}