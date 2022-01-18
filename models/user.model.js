const { DataTypes } = require('sequelize');
const  sequelize  = require('../db/db');
const PostModel = require('./post.model');

const UserModel = sequelize.define("user", {
/*    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },*/
    first_name: {type: DataTypes.STRING },
    last_name: {type: DataTypes.STRING },
    login: {type: DataTypes.STRING },
    password: {type: DataTypes.STRING },
});

UserModel.hasMany(PostModel,{foreignKey: 'owner_id'});
PostModel.belongsTo(UserModel, {foreignKey: 'owner_id'});

module.exports = UserModel;