const mongoose = require('mongoose');

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
        console.log("Aman")

        process.exit(1)
    }
}

module.exports = connectToDB;
