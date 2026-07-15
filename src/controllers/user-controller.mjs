import {userRegisterService} from "../services/user-register-service.mjs";

const registerController = async (req, res, next) => {
    try {
        console.log(req.body);
        const result = await userRegisterService(req.body);
        res.status(200).send(result);
    } catch (e) {
        next(e);
    }
}

export {
    registerController
}