const jwt = require('jsonwebtoken');
const { UserSchema } = require('../middleware/validation/schemas');
const UserService = require('../services/user');

const getUser = async (req, res) => {
    const id = req.params.id;
    const user = await UserService.getUser(id);

    res.json(user);
}

const getFriends = async (req, res) => {
    const id = req.params.id;
    const friends = await UserService.getFriends(id);

    res.json(friends);
}

const putFriend = async (req, res) => {
    const decodedToken = jwt.decode(req.cookies.jwt, process.env.SECRET_TOKEN);
    const from = decodedToken.id;
    const to = req.params.id;

    const friends = await UserService.putFriend(from, to);

    res.json(friends);
}

module.exports = {
    getUser,
    getFriends,
    putFriend
};