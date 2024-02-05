const express = require("express");
const router = express.Router();
const { findDirector , postDirector } = require('../db/config');
const Director = require ('../modules/Directors');
const mongoose = require('mongoose');
const messages = require('../messages/messages')
const {directorSuccessTemplate, errorTemplate, validationTemplate} = require('../templates');

router.get('/', (req, res, next) => {
    console.log("Getting Directors");
    findDirector({})
    .select("name _id")
    .populate("movie", "title year")
    .exec()
    .then(director => {
        return directorSuccessTemplate(res, result, messages.director_found, 200);
    })
    .catch (error => {
        return errorTemplate(res, error, messages.director_not_found, 500);
    })
})

router.get('/:id', (req, res, next) => {
    const directorId = req.params.directorId;
    Director.findById(directorId)
    .select("name _id")
    .populate("movie", "title year")
    .exec()
    .then(director => {
        return directorSuccessTemplate(res, result, messages.director_found, 200);
    })
    .catch (error => {
        return errorTemplate(res, error, messages.director_not_found, 500);
    })
});

router.put('/:id', (req, res, next) => {
    const directorId = req.params.directorId
    .then(director => {
    const director = await Director.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        data: director,
        message: messages.director_updated
    });
    })
    .catch (error) => {
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);
        } else {
            return errorTemplate(res, error, messages.director_cannot_save, 500);

        }
    }
});

router.delete('/:id', (req, res, next) => {
    const directorId = req.params.directorId;

    Director.deleteOne({
        _id: directorId
    })
    .exec()
    .then(result => {
        return directorSuccessTemplate(res, result, messages.director_deleted, 200);
    })
    .catch (error => {
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);
        } else {
            return errorTemplate(res, error, messages.director_cannot_delete, 500);
        }
    })
});

router.post('/', (req, res) => {
    findDirector({
        name: req.body.name,
        age: req.body.age,
        bornIn: req.body.bornIn,
    })
    .then((result) => {
        console.log(result);
        if (result.length > 0) {
            throw new Error(messages.director_already_cataloged)
        } else {
            const newDirector = new Directors ({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                age: req.body.age,
                bornIn: req.body.bornIn,
            });
            postDirector(newDirector)
            .then(result => {
                return directorSuccessTemplate(res, result, messages.director_saved, 200);
        })
    .catch((error) => {
        return errorTemplate(res, error, messages.director_cannot_save, 500);
    });
    }})
    .catch((error) => {
        return errorTemplate(res, error, messages.director_cannot_save, 500);
    });
});

module.exports = router;