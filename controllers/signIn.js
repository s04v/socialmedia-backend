const { SignInSchema }   = require('../middleware/validation/schemas');
const SignInService = require('../services/signIn');
const createResponse = require('../middleware/validation/response');

const signIn = async (req, res) => {
    const { error } =  SignInSchema.validate(req.body);
    if(error) {
        console.log(error.details[0].message);
        res.status(400).send(createResponse(error));
        return;
    }

    const param = req.body;
    const str = await SignInService(param.login, param.password);
    res.send(str);
}

module.exports = signIn;