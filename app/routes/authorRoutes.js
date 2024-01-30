const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Author = require("../modules/Authors");
const Authors = require("../modules/Authors");
//these two lines can also be coded as:
//const router = require("express").Router();

router.get("/", (req,res, next) => {
    const author = Authors.find({});
    try{
        res.json({
            data: author,
            message: "Authors - GET"
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

})

router.get("/:authorid", (req, res, next) => {
    const authorId = req.params.authorId;
    res.json({
        message: "Authors - GET",
        id: authorId
    });
});

router.put("/", (req, res, next) => {
    const authorId = req.params.authorId;
    res.json({
        message: "Authors - PUT"
    });
});

router.delete("/:id", (req, res, next) => {
    const authorId = req.paramas.authorId;
    res.json({
        message: "Authors - DELETE"
    });
});

router.post("/", (req, res, next) => {
    Author.find({
        name: req.body.name,
        book: req.body.book,
        age: req.body.age
    })
    .exec()
    .then(result => {
        console.log(result);
        if(result.length > 0){
            return res.status(406).json({
                message: "Author is already cataloged"
            })
        }
        const newAuthor = new Author({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            book: req.body.book,
            age: req.body.age
        });
    
        newAuthor.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Author Saved",
                author: {
                    name: result.author,
                    book: result.book,
                    age: result.age,
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
                message: "Author is already cateloged"
            }
        })
    })
});

module.exports = router;