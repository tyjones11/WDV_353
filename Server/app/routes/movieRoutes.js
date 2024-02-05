const express = require("express");
const router = express.Router();
const { findMovie , postMovie } = require('../db/config');
const Movie = require ('../modules/Movies');
const mongoose = require('mongoose');
const messages = require('../messages/messages')
const movieSuccessTemplate = require('../templates/movieSuccessTemplate');
const errorTemplate = require('../templates/errorTemplate');
const validationTemplate = require('../templates/validationTemplate');

router.get('/', (req, res, next) => {
    console.log("Getting Movies");
    findMovie({})
    .select("title year genre director _id")
    .exec()
    .then(movie => {
        return movieSuccessTemplate(res, result, messages.movie_found, 200);
    })
    .catch (error => {
        return errorTemplate(res, error, messages.movie_not_found, 500);
    })
})

router.get('/:id', (req, res, next) => {
    const movieId = req.params.movieId;
    Movie.findById(movieId)
    .select("title year genre director _id")
    .exec()
    .then(movie => {
        return movieSuccessTemplate(res, result, messages.movie_found, 200);
    })
    .catch (error => {
        return errorTemplate(res, error, messages.movie_not_found, 500);
    })
});

router.put('/:id', (req, res, next) => {
    const movieId = req.params.movieId
    Movie.updateOne({
        _id: movieId
    })
    .exec()
    .then(movie => {
        return movieSuccessTemplate(res, result, messages.movie_updated, 200);
    })
    .catch(error => {
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);
        } else {
            return errorTemplate(res, error, messages.movie_cannot_save, 500);
        }
    })
});

router.delete('/:id', (req, res, next) => {
    const movieId = req.params.movieId;

    Movie.deleteOne({
        _id: movieId
    })
    .exec()
    .then(result => {
        return movieSuccessTemplate(res, result, messages.movie_deleted, 200);
    })
    .catch (error => {
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);
        } else {
            return errorTemplate(res, error, messages.movie_cannot_delete, 500);
        }
    })
});

router.post('/', (req, res) => {
    findMovie({
        title: req.body.title
    })
    .then((result) => {
        console.log(result);
        if (result.length > 0) {
            throw new Error(messages.movie_already_cataloged)
        } else {
            const newMovie = new Movie ({
                _id: new mongoose.Types.ObjectId(),
                title: req.body.title,
                year: req.body.year,
                genre: req.body.genre,
                averageRating: req.body.averageRating,
                description: req.body.description,
                director: req.body.director,
            });
            postMovie(newMovie)
            .then(result => {
                return movieSuccessTemplate(res, result, messages.movie_saved, 200);
        })
    .catch((error) => {
        return errorTemplate(res, error, messages.movie_cannot_save, 500);
    });
    }})
    .catch((error) => {
        return errorTemplate(res, error, messages.movie_cannot_save, 500);
    });
});

module.exports = router;