const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    console.log('Mocked Connection');
};

const savePost = async (newPost) => {
    console.log("Saving Mocked Post");
    return Promise.resolve({
        title: 'A tree grows in Brooklyn',
        post: 'It sure does',
    });
};

const disconnect = async () => {
    console.log("Mocked Disconnect")
};

module.exports = connect, savePost, disconnect;