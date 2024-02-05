const mongoose = require("mongoose");

const directorsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "You are required to have an Director"],
        unique: [true, "You can only have one Director with that name"],
        trim: true,
        maxlength: [50, "Your name is too long"],
    }, 
    age: {
        type: Number,
        required: true,
    },
    bornIn: {
        type: String,
        required: [true, "You are required to have the state"],
        maxlength: [50, "The state name is too long"],
    }
},
);

module.exports = mongoose.model('Director', directorsSchema);