const app = require('./app');
const mongoose = require('mongoose')
const mongoDBDatabase = require("./config/database")
const dotenv = require('dotenv');


mongoose.set('strictQuery', true);
mongoDBDatabase();

app.listen(5000, () => {
    console.log("Server is working on port no 5000");
})


