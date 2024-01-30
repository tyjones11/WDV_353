const express = require("express");
const router = express.Router();
//these two lines can also be coded as:
//const router = require("express").Router();

const {
    createBook, 
    deleteBook,
    updateBook,
    getAllBooks,
    getBookById,
} = require("../controller/bookController");

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

router.post("/", createBook);

module.exports = router;