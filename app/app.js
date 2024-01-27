const express = require("express");
const cors = require('cors');
const postRouter = require("../router/router");

const app = express();
//middleware to accept json as input (contract)
//req.body
app.use(express.json());

//urlencoding
app.use(express.urlencoded({ extended: true }));

//middleware for cors
app.use(cors());

//middleware for health point check aka actuator
// http://localhost:3000 
app.get("/", (req,res) => {
    res.status(200).json({ message: "Service is up" });
});

// router
app.use("/posts", postRouter);

//middleware for catching errors and bad paths and return JSON
app.use((req,res,next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

//middleware for sending response in JSON
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
        },
    });
});


module.exports = app;