const Directors = require("../modules/Directors");

const getAllDirectors = async (req, res) => {
    const directors = await Directors.find({});
    try {
    res.status(200).json({
        data: directors,
        success: true,
        message: `${req.method} - request to Director endpoint`
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

const getDirectorById = async (req, res) => {
    const {id} = req.params;
    try {
    const director = await Directors.findById(id, req.body, {new: true});
    res.status(200).json({
        data: director,
        success: true,
        message: `${req.method} - request to Director endpoint`
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

const updateDirector = async (req, res) => {
    const {id} = req.params;
    try{
    const director = await Directors.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        data: director,
        success: true,
        message: `${req.method} - request to Director endpoint`
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

const deleteDirector = async (req, res) => {
    const {id} = req.params;
    try {
    const director = await Directors.findByIdAndDelete(id, req.body, {new: true});
    res.status(200).json({
        id,
        data: director,
        success: true,
        message: `${req.method} - request to Director endpoint`
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

const createDirector = async (req, res) => {
    const { director } = req.body;
    try {
        const newDirector = await Directors.create(director);
        console.log("data >>>", newDirector);
        res.status(200).json({
            data: newDirector,
            success: true,
            message: "Director Saved"
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
    createDirector, 
    deleteDirector,
    updateDirector,
    getAllDirectors,
    getDirectorById,
};