const { MeService } = require('../services/me');

const Me = async (req, res) => {
    const token = jwt.decode(req.cookies.jwt, process.env.SECRET_TOKEN);
    const me = await MeService();
    return me;
}

module.exports = {
    Me
};