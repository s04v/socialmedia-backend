const jwt = require('jsonwebtoken');
const { cryptPassword } = require('../utils/cryptPassword');
const userModel = require('../models/user.model');


const signIn = async (login, password) => {
    const data = await userModel.findOne({where:{login:login, password:cryptPassword(password)}})
        .catch( e => console.log(e));
    if(data <= 0)
        return { status: "error", msg: "Invalid login or password" };

    const user = data.dataValues;
    const sign = jwt.sign({id: user.id, login: user.login}, process.env.SECRET_TOKEN, { expiresIn:86400});

    return { status: "success", data: { jwt: sign } };
}

module.exports = signIn;
