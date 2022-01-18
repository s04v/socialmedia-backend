const { DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');

const postModel = sequelize.define("post", {
    wall_id: {type: DataTypes.INTEGER },
    date: {type: DataTypes.DATE },
    content: {type: DataTypes.TEXT, defaultValue: sequelize.NOW },
    owner_id: {type: DataTypes.INTEGER,
        /*references: {
            model: 'user',
            key: 'id'
        },*/ },
});


module.exports = postModel;