const messages = require("../messages/messages");
const Movie = require("../modules/Movies");
const express = require("express");
const mongoose = require("mongoose");
const findMovie = require("../db/config");
const postMovie = require("../db/config");
const errorTemplate = require("../templates/errorTemplate");
const validationTemplate = require("../templates/validationTemplate");
const movieSuccessTemplate = require("../templates/movieSuccessTemplate");

const getAllMovies = async (req, res) => {
    const movies = await Movie.find({});
    try {
    res.status(200).json({
        data: movies,
    });
    } catch (error) {
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);
        } else {
            return errorTemplate(res, error, messages.movie_not_found, 500);
        }
    }
};

const getMovieById = (req, res) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId)
    .select("title year director")
    .populate("director", "name")
    .exec()
    .then (movie => {
        res.status(200).json({
            movie: movie
        })
    })
    .catch (error => {
        return errorTemplate(res, error, messages.movie_not_found, 500);
    })
};

const updateMovie = async (req, res) => {
    const {id} = req.params;
    try{
    const movie = await Movie.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        data: movie,
        message: messages.movie_updated
    });
    } catch (error){
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);

        } else {
            return errorTemplate(res, error, messages.movie_cannot_save, 500);

        }
    }
};

const deleteMovie = async (req, res) => {
    const {id} = req.params;
    try {
    const movie = await Movie.findByIdAndDelete(id, req.body, {new: true});
    res.status(200).json({
        id,
        message: messages.movie_deleted
    });
    } catch (error) {
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);

        } else {
            return errorTemplate(res, error, messages.movie_cannot_delete, 500);

        }
    }
};

const createMovie = (req, res) => {
    findMovie({
        title: req.body.title
    })
    .then((result) => {
        console.log(result);
        if (result.length > 0) {
            res.status(406).json({
                message: messages.movie_already_cataloged
            });
        } else {
            const newMovie = new Movie ({
                title: req.body.title,
                year: req.body.year,
                genre: req.body.genre,
                averageRating: req.body.averageRating,
                description: req.body.description,
                director: req.body.director,
            });
            postMovie(newMovie)
            .then((result) => {
                return movieSuccessTemplate(res, result, messages.movie_saved, 200);
        })
        .catch((error) => {
            return errorTemplate(res, error, messages.movie_cannot_save, 500);
        });
    }})
    .catch((error) => {
        return errorTemplate(res, error, messages.movie_cannot_save, 500);
    })
};

module.exports = {
    createMovie, 
    deleteMovie,
    updateMovie,
    getAllMovies,
    getMovieById,
};