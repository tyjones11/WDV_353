const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "You can only have one movie with that title"],
        maxlength: [50,"Name cannot be more than 50 characters"],
    }, 
    year: {
        type: Number,
        required: true,
        minlength: [4, "The year must be 4 digits long"],
        maxlength: [4, "The year cannot be more than 4 digits long"],
    },
    genre: {
        type: [String],
        required: true,
        enum: [
            "Action",
            "Thriller",
            "Western",
            "Horror",
            "Drama",
            "Romance",
            "Science Fiction",
            "Comedy",
        ],
    },
    averageRating: {
        type: Number,
        min: [1, "Rating must be at least 1"],
        max: [5, "Rating cannot be more than 5"],
    },
    description: {
        type: String, 
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
    },
},
);

module.exports = mongoose.model('Movie', moviesSchema);