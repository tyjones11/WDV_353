const mongoose = require("mongoose");

const postSchema = new mongoose.Schema ({
    title: {
        type: String,
    },
    post: {
        type: String,
    }
},
    {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);