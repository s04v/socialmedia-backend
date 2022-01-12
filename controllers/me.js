const jwt = require('jsonwebtoken');
const MeService = require('../services/me');

const Me = async (req, res) => {
    const token = jwt.decode(req.cookies.jwt, process.env.SECRET_TOKEN);
    const id = token.id;
    console.log(MeService);
    const me = await MeService(id);
    res.json(me);
}

module.exports = Me;