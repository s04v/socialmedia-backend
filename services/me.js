const UserService = require('./user');
const WallService = require('./wall');

const Me = async (id) => {
    const userInfo = await UserService.getUser(id);
    const friends = await UserService.friendsCount(id);
    const followers = await UserService.followersCount(id);
    const posts = await WallService.allPosts(id);

    return {
        "user": userInfo,
        "friends": friends,
        "followers": followers,
        "posts": posts
    };
}

module.exports = Me;