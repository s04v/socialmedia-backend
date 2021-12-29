
const userModel = require('../models/user.model');
const relationModel = require('../models/relationship.model');

const getUser = async (id) => {
    const user = await userModel.findOne({where:{ id:id }})
        .catch( e => console.log(e));
    if( user === null)
        return "user not found";

    return user.dataValues;
}

// TODO:
const getFriends = async (id) => { }

const putFriend = async (from, to) => {
    // TODO: check if user exists
    const friends = await relationModel.create({
            user_1: to,
            user_2: from,
            status: 'followers'
    }).catch( e => console.log(e));

    return friends;
}

module.exports = {
    getUser,
    getFriends,
    putFriend
};