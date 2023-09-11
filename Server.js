const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv= require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 5000;

//connect to mongodb and start server

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))
}).catch((err)=> console.log(err))
