const mongoose = require("mongoose");
const Movie = require('../modules/Movies');
const Director = require('../modules/Directors');

const connect = () => {
    mongoose.connect('mongodb://localhost:27017/movieshelf', (err) => {
        console.log('Real Connected To DB');
    });
};

const postDirector = async (newDirector) => {
    console.log('Real Director', newDirector);
    return await newDirector.save();
};

const findDirector = async (object) => {
    console.log('Find Real Director');
    return await Director.find(object).exec();
};

const postMovie = async (newMovie) => {
    console.log('Real Movie', newMovie);
    return await newMovie.save();
};

const findMovie = async (object) => {
    console.log('Find Real Movie');
    return await Movie.find(object).exec();
};

const disconnect = () => {
    console.log('Real Disconnecting');
    mongoose.connection.close();
};

module.exports = connectDB, connect, postDirector, findDirector, postMovie, findMovie, disconnect;