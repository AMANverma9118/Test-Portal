const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectToDB = async () => {
    try{
        await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        console.log('Connected to database!');
    }
    catch (error) {

        process.exit(1)
    }
}

module.exports = connectToDB;
