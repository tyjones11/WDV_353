const directorSuccessTemplate = (res, result, message, status) => {
    return res.status(status).json({
        message: message,
        director: result,
        status: status,
    });
};

module.exports = directorSuccessTemplate;