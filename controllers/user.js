const { UserSchema } = require('../middleware/validation/schemas');
const UserService = require('../services/user');

const User = async (req, res) => {
    const id = req.params.id;
    const user = await UserService(id);

    res.json(user);
}

module.exports = User;