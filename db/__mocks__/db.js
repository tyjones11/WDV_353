const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    try {
        const connect = await mongoose.connect(process.env.mongodb, {
            useUnifiedTopology: true,
        });
        console.log(`MongoDB is up and running`);
    } catch (error) {
        console.log(error);
    }
};

const savePost = async (newPost) => {
    console.log("Saving real post");
    return await newPost.save();
};

const disconnect = async () => {
    console.log("Real Disconnect")
    await mongoose.connection.close();
};

module.exports = connect, savePost, disconnect;