const postModel = require('../models/post.model');
const userModel = require('../models/user.model');
const {cryptPassword} = require("../utils/cryptPassword");

const sequelize = require('sequelize');
const createResponse = require('../middleware/validation/response');
// TODO: date
const addPost = async (wallId, content, ownerId) => {
    const isAdded = await postModel.create({
        wall_id: wallId,
        content: content,
        owner_id: ownerId,
    }).catch( e => console.log(e));

    if(!isAdded)
        return createResponse("error", null, error.details[0].message);

    const lastPost = await postModel.findOne({
        order: [ [ 'id', 'DESC' ]],
        include:{
            model: userModel,
            attributes:['first_name', 'last_name', 'avatar']
        }
    });

    return  createResponse("success", lastPost, null);
}

const allPosts = async (wallId) => {
    const posts = await postModel.findAll({
        where:{
             wall_id: wallId
        },
        order:[['id', 'DESC']],
        include:{
                model: userModel,
                attributes:['first_name', 'last_name', 'avatar']
            }})
        .catch( e => console.log(e));

    return posts;
}

module.exports = {
    addPost,
    allPosts
}