const mongoose = require("mongoose");

const authorsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "You are required to have an Author"],
        unique: [true, "You can only have one Author of that name"],
        trim: true,
        maxlength: [50,"Your name is too long"],
    }, 
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
},
{   timestamps: true}
);

module.exports = mongoose.model("Author", authorsSchema);