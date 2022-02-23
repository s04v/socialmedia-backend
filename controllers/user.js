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

const status = async (req, res) => {
    const decodedToken = jwt.decode(req.cookies.jwt, process.env.SECRET_TOKEN);
    const user1 = decodedToken.id;
    const user2 = req.params.id;

     const status = await UserService.status(user1, user2);

    res.json(status);
}

module.exports = {
    getUser,
    getFriends,
    putFriend,
    status
};