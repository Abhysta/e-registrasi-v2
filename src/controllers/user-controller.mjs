import {userRegisterService} from "../services/user-register-service.mjs";

const registerController = (req, res, next) => {
    try {
        const result = userRegisterService.register(req.body);
        res.status(200).send(result);
    } catch (e) {
        next(e);
    }
}