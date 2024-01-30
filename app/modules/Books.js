const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
title: {type: String,
        required: true},
author: {type: String,
        required: true},
});

module.exports = mongoose.model("Book", booksSchema);