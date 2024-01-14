const express = require("express");
const router = express.Router();

const movies = [
    {id: 45, movie: "Harry Potter and the Sorcerer's Stone"},
    {id: 89, movie: "Harry Potter and the Chamber of Secrets"},
    {id: 9, movie: "Harry Potter and the Prisoner of Azkaban"},
    {id: 5, movie: "Harry Potter and the Goblet of Fire"},
    {id: 32, movie: "Harry Potter and the Order of Phoenix"},
    {id: 55, movie: "Harry Potter and the Half-Blood Prince"},
    {id: 29, movie: "Harry Potter and the Deathly Hallows"},
];

//GET
//localhost:3000/movies
router.get("/movies", (req, res) => {
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
router.get("/movies:bob", (req,res) => {
    const { bob } = req.params;
    console.log(bob);
});

router.put("/:id", (req,res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "PUT by Id for /api",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.delete("/:id", (req,res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "DELETE by Id for /api",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.post("/", (req, res) => {
const { data } = req.body;
res.status(200).json({
    message: "POST to /movies",
    data,
    metadata: {
        hostname: req.hostname, 
        method: req.method,
    },
});
});

module.exports = router;