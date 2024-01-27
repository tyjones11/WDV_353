const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You are required to have an Author"],
        unique: [true, "You can only have one Author of that name"],
        trim: true,
        maxlength: [50,"Your name is too long"],
    }, 
    age: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
    },
    description: {
        type: String, 
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    }
},
{   timestamps: true}
);

module.exports = mongoose.model("Author", authorsSchema);