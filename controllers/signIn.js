const { SignInSchema }   = require('../middleware/validation/schemas');
const SignInService = require('../services/signIn');
const createResponse = require('../middleware/validation/response');

const signIn = async (req, res) => {
    const { error } =  SignInSchema.validate(req.body);
    if(error) {
        console.log(error.details[0].message);
        res.send(createResponse("error", null, error.details[0].message));
        return;
    }

    const param = req.body;
    const {status, data, msg} = await SignInService(param.login, param.password);
    res.send(createResponse(status, data, msg));
}

module.exports = signIn;