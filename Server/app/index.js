const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const dirctorRoutes = require("../app/routes/directorRoutes");
const movieRoutes = require("../app/routes/movieRoutes");
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

//Router - define router
app.use('/directors', dirctorRoutes);
app.use('/movies', movieRoutes);

//Service - define local host 3000
app.get("/", (req, res) => {
    res.status(201).json({
        message: "Service is up",
        method: req.method
    });
});

mongoose.connect(process.env.MONGODB_URI)

module.exports = app;