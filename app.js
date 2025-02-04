//Imports
const AppRoutes = require('./routes/index');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db');


//Init
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
db();


/*
Routes
*/

//Test Route
app.use('/test', (req, res) => {
    res.send('Testing');
});

app.use('/api', AppRoutes);

app.get('/',(req,res)=>{
    res.send('Hello everyone, Your name');
})

//Server
app.listen(PORT, () => {
    console.log(`server running on port http://localhost:${PORT}`);
});
