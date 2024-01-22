const express = require("express");
const router = express.Router();

const movies = [];

//GET
//localhost:3000/movies
router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET list of movies",
        metadata: {
            hostname: req.hostname, 
            method: req.method,
            data: movies,
        },
    });
});

//GET by Id
//localhost:3000/movies/45
router.get('/get/:id', (req,res) => {
    const { id } = req.params.id;
    const movie = movies.findById(id, req.body, {new: true});
    res.status(200).json({
        message: "GET by Id for /movies",
        metadata: {
            hostname: req.hostname,
            id: id,
            method: req.method,
        },
    });
});

//PUT by ID
//localhost:3000/movies/89
router.put('/put/:id', (req,res) => {
    const { id } = req.params.id;
    const movie = movies.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        message: "PUT by Id for /movies",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


//DELETE by Id
//localhost:3000/movies/9
router.delete("/:id", (req,res) => {
    const { id } = req.params.id;
    const movie = movies.findByIdAndDelete(id, req.body, {new: true});
    res.status(200).json({
        message: "DELETE by Id for /movies",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


//POST localhost:3000/movies
router.post("/", (req, res) => {
const new_movie = req.body ;
movies.push(new_movie);
console.log(req.body);
res.status(200).json({
    message: "POST to /movies",
    metadata: {
        hostname: req.hostname, 
        method: req.method,
        data: new_movie
    },
});
});

module.exports = router;