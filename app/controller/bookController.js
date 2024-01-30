const Books = require("../modules/Books");

const getAllBooks = async (req, res) => {
    const movies = await Movies.find({});
    try {
    res.status(200).json({
        data: books,
        success: true,
        message: `${req.method} - request to Book endpoint`
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

const getBookById = async (req, res) => {
    const {id} = req.params;
    try {
    const book = await Book.findById(id, req.body, {new: true});
    res.status(200).json({
        data: book,
        success: true,
        message: `${req.method} - request to Book endpoint`
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

const updateBook = async (req, res) => {
    const {id} = req.params;
    try{
    const book = await Books.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        data: book,
        success: true,
        message: `${req.method} - request to Book endpoint`
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

const deleteBook = async (req, res) => {
    const {id} = req.params;
    try {
    const book = await Books.findByIdAndDelete(id, req.body, {new: true});
    res.status(200).json({
        id,
        success: true,
        message: `${req.method} - request to Book endpoint`
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

const createBook = async (req, res) => {
    const { book } = req.body;
    try {
        const newBook = await Books.create(book);
        console.log("data >>>", newBook);
        res.status(200).json({
            data: newBook,
            success: true,
            message: `${req.method} - request to Book endpoint`
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
    createBook, 
    deleteBook,
    updateBook,
    getAllBooks,
    getBookById,
};