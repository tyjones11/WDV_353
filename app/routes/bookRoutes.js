const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Book = require("../modules/Books");

router.get("/", (req, res, next) => {
    const books = Books.find({});
    try{
        res.json({
            data: books,
            message: "Books - GET"
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

});

//GOOD - EVERYTHING WORKS CORRECTLY
router.get("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
    Book.findById(bookId)
    .select("title author _id")
    .exec()
    .then(book => {
        if(!book){
            console.log(book);
            return res.status(404).json({
                message: "Book Not Found"
            })
        }
        res.status(201).json({
            book: book
        })
    })
    .catch(error => {
        res.status(500).json({
            error: {
                message: "Book Not Found"
            }
        })
    })

});

router.put("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
    res.json({
        message: "Book - PUT"
    });
});

//WORKS 
router.delete("/:id", (req, res, next) => {
    const bookId = req.params.bookId;

    Book.deleteOne({
        _id: bookId
    })
    .exec()
    .then(result => {
        res.status(200).json({
            message: "Book Deleted",
            request: {
                method: "GET",
                url: "http://localhost:300/api/v1/books" + bookId
            }
        })
    })
    .catch(error => {
        res.status(500).json({
            message: error.message
        })
    })
});

router.post("/", (req, res, next) => {

    Book.find({
        title: req.body.title,
        author: req.body.author
    })
    .exec()
    .then(result => {
        console.log(result);
        if(result.length > 0){
            return res.status(406).json({
                message: "Book is already cataloged"
            })
        }
        const newBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            author: req.body.author
        });
    
        newBook.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Book Saved",
                book: {
                    title: result.title,
                    author: result.author,
                    id: result._id,
                    metadata: {
                        method: req.method,
                        host: req.hostname,
                    }
                }
            })
        })
        .catch(error=> {
            console.error(error.message);
            res.status(500).json({
                error: {
                    message: error.message
                }
            })
        });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({
            error: {
                message: "Book is already cateloged"
            }
        })
    })
});

module.exports = router;