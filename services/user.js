const userModel = require('../models/user.model');
const relationModel = require('../models/relationship.model');
const Op = require('sequelize').Op


const getFriends = async (id) => {
    const friends = await relationModel.findAll({where:{
            [Op.and]: [
                {[Op.or]: [{user_1: id}, {user_2: id}]},
                {status: 'friends'}]
    }}).catch( e => console.log(e));

    return friends;
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

const friendsCount = async (id) => {
    const friends = await relationModel.count({where:{
            [Op.and]: [
                {[Op.or]: [{user_1: id}, {user_2: id}]},
                {status: 'friends'}]
        }}).catch( e => console.log(e));


    return friends;
}

const followersCount = async (id) => {
    const followers = await relationModel.count({where:{
            [Op.and]: [
                {user_2: id},
                {status: 'followers'}]
        }}).catch( e => console.log(e));

    return followers;
}

const getUser = async (id) => {
    const user = await userModel.findOne({where:{ id:id }})
        .catch( e => console.log(e));
    if( user === null)
        return "user not found";

    const friends = await friendsCount(id);
    const followers = await followersCount(id);

    return {
        "user": user.dataValues,
        "friendsCount": friends,
        "followersCount": followers
    };
}

const status = async (user1, user2) => {
    const data = await relationModel.findOne({where:{
        [Op.or]: [
                { [Op.and]: [ {user_1: user1}, {user_2: user2} ] },
                { [Op.and]: [ {user_1: user2}, {user_2: user1} ] }
            ]
        }
        }).catch( e => console.log(e));

        console.log(data);
        if(data === null)
            return { status: "null" };

        return { status: data.dataValues.status };
}

module.exports = {
    getUser,
    getFriends,
    putFriend,
    friendsCount,
    followersCount,
    status
};