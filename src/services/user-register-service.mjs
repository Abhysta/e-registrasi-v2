import {validate} from "../validators/validation.mjs";
import {userRegister} from "../validators/user-register.mjs";
import {prismaClient} from "../config/database.mjs";
import {ResponseError} from "../error/response-error.js";
import Joi from "joi";
import {trainingService} from "./training-service.mjs";

async function userRegisterService (req) {
    const result = validate(userRegister, req)

    console.log(`Result ${JSON.stringify(result)}`);

    const find = await prismaClient.registerPelatihan.findFirst({
        where: {
            kodePelatihan : result.kodePelatihan,
            NIP : result.NIP
        }
    })

    if (find) {
        throw new ResponseError(404, "Data Already Registered")
    }

    return prismaClient.registerPelatihan.create({
        data : result,
        include : {
            training : true
        }
    })

}

export {
    userRegisterService,
}