import Joi from "joi";

const userRegister = Joi.object({
        fullName: Joi.string().required(),
        firstTitle: Joi.string().required(),
        endTitle: Joi.string().required(),
        NIP: Joi.string().required(),
        placeBirth: Joi.string().required(),
        dateBirth: Joi.date().required(),
        religion: Joi.string().required(),
        golongan: Joi.string().required(),
        jabatan: Joi.string().required(),
        unitKerja: Joi.string().required(),
        phone: Joi.number().required,
        email: Joi.string().email().required(),
        nomorSuratTugas: Joi.string().required()
})

export {
        userRegister,
}