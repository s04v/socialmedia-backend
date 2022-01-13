const { SignUpSchema }   = require('../middleware/validation/schemas');
const SignUpService = require('../services/signUp');
const createResponse = require('../middleware/validation/response');

const signUp = async (req, res) => {
    const { error } =  SignUpSchema.validate(req.body);
    if(error) {
        res.json(createResponse("error", null, error.details[0].message));
        return;
    }

    const param = req.body;
    const {status, msg} = await SignUpService(param.firstName, param.lastName, param.login, param.password);

    res.json(createResponse(status, null, msg));

}

module.exports = signUp;