const createResponse = (error) => {
    return {message: error.details[0].message};
}

module.exports = createResponse;