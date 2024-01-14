const express = require("express");
const router = express.Router();

const movies = [
    {id: 45, movie: "Harry Potter and the Sorcerer's Stone"},
    {id: 89, movie: "Harry Potter and the Chamber"},
    {id: 9, movie: "Harry Potter and the Prisoner of Azkaban"},
    {id: 5, movie: "Harry Potter and the Goblet of Fire"},
    {id: 32, movie: "Harry Potter and the Order of Phoenix"},
    {id: 55, movie: "Harry Potter and the Half-Blood Prince"},
];

//GOOD
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

//GOOD
//GET by Id
//localhost:3000/movies/45
router.get("/45", (req,res) => {
    const { data } = req.params;
    console.log(movies);
    res.status(200).json({
        message: "GET by Id for /movies",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            data: "Harry Potter and the Sourcer's Stone",
        },
    });
});

//GOOD
//PUT by ID
//localhost:3000/movies/89
router.put("/89", (req,res) => {
    const { data } = req.params;
    res.status(200).json({
        message: "PUT by Id for /movies",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            data: "Harry Potter and the Chamber of Secrets",
        },
    });
});

//GOOD
//DELETE by Id
//localhost:3000/movies/9
router.delete("/9", (req,res) => {
    const { data } = req.params;
    res.status(200).json({
        message: "DELETE by Id for /movies",
        metadata: {
            hostname: req.hostname,
            method: req.method,
            data: "Harry Potter and the Prisoner of Azkaban"
        },
    });
});

//GOOD
//POST
//POST localhost:3000/movies
router.post("/", (req, res) => {
const { data } = req.body;
console.log(req.body);
res.status(200).json({
    message: "POST to /movies",
    metadata: {
        hostname: req.hostname, 
        method: req.method,
        data,
    },
});
});

module.exports = router;