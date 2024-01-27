const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    try {
        const conn = await mongoose.connect(process.env.mongodb, {
            useUnifiedTopology: true,
        });
        console.log(`MongoDB is up and running`);
    } catch (error) {
        console.log(error);
    }
};

const savePost = async (newPost) => {
    return await newPost.save();
};

const disconnect = () => {
    mongoose.connection.close();
};

module.exports = connect, savePost, disconnect;