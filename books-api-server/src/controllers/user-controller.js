const { Response, ValidationException } = require('../utils/http-handler');



class UserController {

    constructor(userService, tokenService) {
        this.service = userService;
        this.tokenService = tokenService;

    }

    getAllUsers = async () => {
        return await this.service.getAllUsers();
    }

    register = async ({ body: user }) => {
        var result = await this.service.registerUser(user);
        return result;
    }

    

    login = async ({ body: loginInfo }) => {
        let result = await this.service.loginUser(loginInfo);
        return result;
    }


}






module.exports = UserController;

