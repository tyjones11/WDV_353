const messages = require("../messages/messages");
const Director = require("../modules/Directors");
const findDirector = require("../db/config");
const postDirector = require("../db/config");
const errorTemplate = require("../templates/errorTemplate");
const validationTemplate = require("../templates/validationTemplate");
const directorSuccessTemplate = require("../templates/directorSuccessTemplate");


const getAllDirectors = async (req, res) => {
    const directors = await Director.find({});
    try {
    res.status(200).json({
        data: directors,
    });
    } catch (error) {
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);
        } else {
            return errorTemplate(res, error, messages.director_not_found, 500);       
        }
    }
};

const getDirectorById = (req, res) => {
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
};

const updateDirector = async (req, res) => {
    const {id} = req.params;
    try{
    const director = await Director.findByIdAndUpdate(id, req.body, {new: true});
    res.status(200).json({
        data: director,
        message: messages.director_updated
    });
    } catch (error){
        if (error.name == "ValidationError"){
            return validationTemplate(res, error, messages.validation_error, 422);
        } else {
            return errorTemplate(res, error, messages.director_cannot_save, 500);

        }
    }
};

const deleteDirector = (req, res) => {
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
};

const createDirector = (req, res) => {
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
                name: req.body.name,
                age: req.body.age,
                bornIn: req.body.bornIn,
            });
            postDirector(newDirector)
            .then((result) => {
                return directorSuccessTemplate(res, result, messages.director_saved, 200);
        })
        .catch((error) => {
            return errorTemplate(res, error, messages.director_cannot_save, 500);
        });
    }})
    .catch((error) => {
        return errorTemplate(res, error, messages.director_cannot_save, 500);
    });
};

module.exports = {
    createDirector, 
    deleteDirector,
    updateDirector,
    getAllDirectors,
    getDirectorById,
};