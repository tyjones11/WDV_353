const express = require("express");
const Post = require("../model/postModel");
const { restart } = require("nodemon");
const router = express.Router();

router.post("/post", async (req, res) => {
    const title = req.body.title;
    const post = req.body.post;
    const newPost = new Post({
        title: title,
        post: post,
    });

    savePost(newPost).then(dbPost => {
        res.status(201).json({post: dbPost});
    })
    .catch(error => {
        res.status(501).json({
            error: {
                message: error.message,
                status: error.status,
            },
        });
    });
});

module.exports = router;