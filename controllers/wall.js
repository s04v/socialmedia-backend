const jwt = require('jsonwebtoken');
const WallService = require('../services/wall');

const addPost = async (req, res) => {
    const wallId = req.params.id;
    const ownerId = jwt.decode(req.cookies.jwt, process.env.SECRET_TOKEN).id;
    const content = req.body.content;

    const result = await WallService.addPost(wallId, content, ownerId);

    res.send(result);
}

const allPosts = async (req, res) => {
    const id = req.params.id;

    const posts= await WallService.allPosts(id);

    res.json(posts);
}

module.exports = {
    addPost,
    allPosts
}