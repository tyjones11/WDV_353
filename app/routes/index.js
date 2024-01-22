const express = require("express");
const router = express.Router();
const directorRoutes = require("./directorRoutes");

router.get("/", (req, res) => {
    res.status(200).json({
        success: true, 
        message: `${req.method} - Request made`
    });
});

router.use("/directors", directorRoutes);

module.exports = router;