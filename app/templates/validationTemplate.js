const validationTemplate = (res, error, message, status) => {
    return res.status(status).json({
        error: {
            message: message,
            error: error,
            status: status,
        },
    });
};

module.exports = validationTemplate;