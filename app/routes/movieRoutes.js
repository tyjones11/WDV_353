const express = require("express");
const router = express.Router();
//these two lines can also be coded as:
//const router = require("express").Router();

const {
    createMovie, 
    deleteMovie,
    updateMovie,
    getAllMovies,
    getMovieById,
} = require("../controller/movieController");

router.get("/", getAllMovies);

router.get("/:id", getMovieById);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

router.post("/", createMovie);

module.exports = router;