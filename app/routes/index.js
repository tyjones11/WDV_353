const express = require("express");
const router = express.Router();

//localhost:3000/api
router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET to API",
        metadata: {
            hostname: req.hostname, 
            method: req.method,
        },
    });
});

//using get by id
router.get("/:id", (req,res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "GET by Id for /api",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.put("/:id", (req,res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "PUT by Id for /api",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.delete("/:id", (req,res) => {
    const { id } = req.params;
    res.status(200).json({
        message: "DELETE by Id for /api",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.post("/", (req, res) => {
const { data } = req.body;
res.status(200).json({
    message: "POST to /api",
    data: data,
    metadata: {
        hostname: req.hostname, 
        method: req.method,
    },
});
});

module.exports = router;