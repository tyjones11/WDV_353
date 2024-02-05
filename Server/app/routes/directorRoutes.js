const express = require("express");
const router = express.Router();
//these two lines can also be coded as:
//const router = require("express").Router();

const {
    createDirector, 
    deleteDirector,
    updateDirector,
    getAllDirectors,
    getDirectorById,
} = require("../controller/directorController");

router.get("/", getAllDirectors);

router.get("/:id", getDirectorById);

router.put("/:id", updateDirector);

router.delete("/:id", deleteDirector);

router.post("/", createDirector);

module.exports = router;