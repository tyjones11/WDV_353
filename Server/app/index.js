const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const routeHandler = require("./routes");
const cors = require('cors');

//middleware for logging
app.use(morgan("dev"));

//parsing middleware
app.use(express.urlencoded({
    extended: true
}));

//use middleware to process json
app.use(express.json());

//use middleware to handle CORs Policy
app.use(cors());
//Without Module
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-Width, Content-Type,Accept, Authorization")
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "POST,PUT,GET,PATCH,DELETE")
    }
    next();
})


app.get("/", (req, res) => {
    res.status(200).json({
        message: "API is running",
        success: true
    });
});

app.use("/api", routeHandler);

module.exports = app;