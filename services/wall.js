const postModel = require('../models/post.model');
const {cryptPassword} = require("../utils/cryptPassword");

// TODO: date
const addPost = async (wallId, content, ownerId) => {
    const isAdded = postModel.create({
        wall_id: wallId,
        content: content,
        owner_id: ownerId,
    }).catch( e => console.log(e));

    if(!isAdded)
        return "error adding a post";
    return "OK";
}

const allPosts = async (wallId) => {
    const posts = await postModel.findAll({where:{
             wall_id: wallId
        }}).catch( e => console.log(e));

    return posts;
}

module.exports = {
    addPost,
    allPosts
}