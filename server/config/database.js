const mongoose = require("mongoose");

const mongodbDatabase = () => {
    mongoose.connect(
        "mongodb://localhost:27017/Ecommerce15",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then((data) => {
        console.log(data.connection.host);
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = mongodbDatabase;