import {ResponseError} from "../error/response-error.js";
import jwt from "jsonwebtoken";


const public_key = process.env.PUBLIC_KEY;

const verificationMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization

        if (!token || !token.startsWith("Bearer ")) {
            throw new ResponseError(404, 'Not authorized');
        }
        const saveToken = token.split(" ")[1]

        req.user = jwt.verify(saveToken, public_key);
        next();

    } catch (e) {
        next(e)
    }
}

export {
    verificationMiddleware,
}