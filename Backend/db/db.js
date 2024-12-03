const mongoose = require('mongoose')

function connectToDb(){
    const uri = process.env.DB_CONNECT;
    mongoose.connect(uri )
   .then(()=>console.log("Connected to MongoDB"))
   .catch(()=>console.log("NOT connected to MongoDB"))
}

module.exports = connectToDb;