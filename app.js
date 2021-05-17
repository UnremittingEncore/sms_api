const express = require('express');
const app = express()
const mongoose = require('mongoose');
const config = require('./config/index');
const routes = require('./config/routes');
// const { InboundRouter }  = require('./test/inbound');
// const { OutboundRouter }  = require('./test/outbound');
require('dotenv').config()

const http = require("http");

//const message = require('./model/message');

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3001;

app.use(express.json());
// app.use(InboundRouter);
// app.use(OutboundRouter);


const { MONGO_CONNECTION_URL } = config;

mongoose.connect(MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) // Adding new mongo url parser
.then(() => console.log("Connected to database in cluster"))
.catch((err) => console.log(err));


routes(app);

app.get('/', (req, res) => {
    res.send("Refer api's");
});

app.all('*', async  (req,res)=> {
    res.status(405).json({
        "message" : "Method not allowed"  
    });
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Connected to port ${PORT}`);
    console.log(`GET request @ http://${HOSTNAME}:${PORT}/rest/v1/messages`);
})