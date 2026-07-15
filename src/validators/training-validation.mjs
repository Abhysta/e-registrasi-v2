import Joi from "joi";

const trainingValidation = Joi.object({
    kodePelatihan: Joi.string().required(),
    namaPelatihan : Joi.string().required(),
    tanggalMulai : Joi.date().required(),
    tanggalBerakhir : Joi.date().required(),
})

export {
    trainingValidation
}