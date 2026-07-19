import { userRegisterService } from "../services/user-register-service.mjs";
import { getUserByNIP } from "../services/user-service.mjs";

const registerController = async (req, res, next) => {
    try {
        const result = await userRegisterService(req.body);
        res.status(200).send(result);
    } catch (e) {
        next(e);
    }
};

const getUserController = async (req, res, next) => {
    try {
        const nip = req.user.NIP;
        const result = await getUserByNIP(nip);
        res.status(200).json(result);
    } catch (e) {
        next(e);
    }
};

export {
    registerController,
    getUserController,
}