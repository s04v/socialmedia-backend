const userModel = require('../models/user.model');
const relationModel = require('../models/relationship.model');
const Op = require('sequelize').Op

const getUser = async (id) => {
    const user = await userModel.findOne({where:{ id:id }})
        .catch( e => console.log(e));
    if( user === null)
        return "user not found";

    return user.dataValues;
}

const getFriends = async (id) => {
    const firends = await relationModel.findAll({where:{
        [Op.or]: [{user_1: id}, {user_2: id}]
    }}).catch( e => console.log(e));

    console.log(firends);
    return firends;
}

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