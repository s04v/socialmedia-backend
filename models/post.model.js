const { Sequelize, DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const postModel = sequelize.define("post", {
    wall_id: {type: Sequelize.INTEGER },
    date: {type: Sequelize.DATE },
    content: {type: Sequelize.TEXT },
    owner_id: {type: Sequelize.INTEGER },
});

module.exports = postModel;