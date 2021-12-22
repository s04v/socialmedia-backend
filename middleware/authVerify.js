const jwt = require('jsonwebtoken');

const authVerify = (req, res, next) => {
    const token = req.cookies.jwt;
    try {
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        next();
    } catch (e) {
        return res.status(401).send("unauthorized");
    }
}

module.exports = authVerify;