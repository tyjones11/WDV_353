const Authors = require("../modules/Authors");

const getAllAuthors = async (req, res) => {
    const authors = await Authors.find({});
    try {
    res.status(200).json({
        data: authors,
        success: true,
        message: `${req.method} - request to Author endpoint`
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

const getAuthorById = (req, res) => {
    const {id} = req.params;
    try {
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to Author endpoint`
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

const updateAuthor = async (req, res) => {
    const {id} = req.params;
    try{
    const author = await Authors.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        data: author,
        success: true,
        message: `${req.method} - request to Author endpoint`
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

const deleteAuthor = (req, res) => {
    const {id} = req.params;
    try {
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to Author endpoint`
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

const createAuthor = async (req, res) => {
    const { author } = req.body;
    try {
        const newAuthor = await Authors.create(author);
        console.log("data >>>", newAuthor);
        res.status(200).json({
            data: newAuthor,
            success: true,
            message: `${req.method} - request to Author endpoint`
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
    createAuthor, 
    deleteAuthor,
    updateAuthor,
    getAllAuthors,
    getAuthorById,
};