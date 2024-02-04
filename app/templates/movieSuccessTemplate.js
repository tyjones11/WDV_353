const movieSuccessTemplate = (res, result, message, status) => {
    return res.status(status).json({
        message: message,
        movie: result,
        status: status,
    });
};

module.exports = movieSuccessTemplate;