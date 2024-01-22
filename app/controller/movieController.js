const Movies = require("../modules/Movies");

const getAllMovies = async (req, res) => {
    const movies = await Movies.find({});
    try {
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