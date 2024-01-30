const Movies = require("../modules/Movies")
const axios = require('axios');

const getAllMovies = async (req, res) => {
    let querString = JSON.stringify(req.query);

    querString = querString.replace(
    /\b(gt|gte|lt|lte)\b/g,
    (match) => `$${match}`);

    let query = Movies.find(JSON.parse(querString)); 

    if (req.query.select){
        const fields = req.query.select.split(',').join(" ");
        query = Movies.find({}).select(fields);
    }

    if (req.query.sort){
        const sortBy = req.query.sort.split(',').join(" ");
        query = Movies.find({}).sort(sortBy);        
    }
    try {
    const movies = await query;
    console.log('Real Movies');
    return await axios.get(`${process.env.moviesURL}`);


    res.status(200).json({
        data: movies,
        success: true,
        message: `${req.method} - request to Movie endpoint`
    });
    } catch (error) {
        if (error.name == "ValidationError"){
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
};

const getMovieById = async (req, res) => {
    const {id} = req.params;
    try {
    const movie = await Movies.findById(id, req.body, {new: true});
    console.log('Real Movies by Id');
    return await axios.get(`${process.env.moviesURL}${id}`);


    res.status(200).json({
        data: movie,
        success: true,
        message: `${req.method} - request to Movie endpoint`
    });
    } catch (error) {
        if (error.name == "ValidationError"){
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
};

const updateMovie = async (req, res) => {
    const {id} = req.params;
    try{
    const movie = await Movies.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        data: movie,
        success: true,
        message: `${req.method} - request to Movie endpoint`
    });
    } catch (error){
        if (error.name == "ValidationError"){
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
};

const deleteMovie = async (req, res) => {
    const {id} = req.params;
    try {
    const movie = await Movies.findByIdAndDelete(id, req.body, {new: true});
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to Movie endpoint`
    });
    } catch (error) {
        if (error.name == "ValidationError"){
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
};

const createMovie = async (req, res) => {
    const { movie } = req.body;
    try {
        const newMovie = await Movies.create(movie);
        console.log("data >>>", newMovie);
        res.status(200).json({
            data: newMovie,
            success: true,
            message: `${req.method} - request to Movie endpoint`
        });
    } catch (error) {
        if (error.name == "ValidationError"){
            console.error("Error Validating!", error);
            res.status(422).json(error);
        } else {
            console.error(error);
            res.status(500).json(error);
        }
    }
};

module.exports = {
    createMovie, 
    deleteMovie,
    updateMovie,
    getAllMovies,
    getMovieById,
};