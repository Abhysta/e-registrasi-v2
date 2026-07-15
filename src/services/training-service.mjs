import {validate} from "../validators/validation.mjs";
import {trainingValidation} from "../validators/training-validation.mjs";
import {ResponseError} from "../error/response-error.js";
import {prismaClient} from "../config/database.mjs";

const trainingService = async (req) => {
    const result = validate(trainingValidation, req)

    console.log(result);
    const kode = await prismaClient.training.findUnique({
        where: {
            kodePelatihan : result.kodePelatihan,
        }
    })

    console.log(kode)
    if (kode) {
        throw new ResponseError(404, "Training service already registered")
    }

    return prismaClient.training.create({
        data : result,
        select : {
            kodePelatihan : true,
            namaPelatihan : true,
            tanggalMulai : true,
            tanggalBerakhir : true,
        }
    })
}

export {trainingService};