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

router.get("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
    const books = Book.find({});
    try{res.json({
        message: "Books - GET",
        id: bookId,
        books,
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

router.put("/:bookId", (req, res, next) => {
    const bookId = req.params.bookId;
    res.json({
        message: "Book - PUT"
    });
});

router.delete("/:id", (req, res, next) => {
    const bookId = req.paramas.bookId;
    res.json({
        message: "Book - DELETE"
    });
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