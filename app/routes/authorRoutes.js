const express = require("express");
const router = express.Router();
//these two lines can also be coded as:
//const router = require("express").Router();

const {
    createAuthor, 
    deleteAuthor,
    updateAuthor,
    getAllAuthors,
    getAuthorById,
} = require("../controller/authorController");

router.get("/", getAllAuthors);

router.get("/:id", getAuthorById);

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

router.post("/", createAuthor);

module.exports = router;