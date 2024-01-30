const express = require("express");
const router = express.Router();
const authorRoutes = require("./authorRoutes");
const bookRoutes = require("./bookRoutes");

router.get("/", (req, res) => {
    res.status(200).json({
        success: true, 
        message: `${req.method} - Request made`
    });
});

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);

module.exports = router;