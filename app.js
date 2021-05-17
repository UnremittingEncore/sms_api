const express = require('express');
const app = express()
const mongoose = require('mongoose');
const config = require('./config/index');
const routes = require('./config/routes');
require('dotenv').config()

// const message = require('./model/message');

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3001;

const { MONGO_CONNECTION_URL } = config;


mongoose.connect(MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) // Adding new mongo url parser
.then(() => console.log("Connected to database in cluster"))
.catch((err) => console.log(err));

//  //#### More data hardcoded into mongoDB collection ####
// message.create({
//     "message" : "xxxx",
//     "error": "xxxx"
// })


routes(app);

app.listen(PORT, HOSTNAME, () => {
    console.log(`Connected to port ${PORT}`);
    console.log(`GET request @ http://${HOSTNAME}:${PORT}/rest/v1/messages`);
})