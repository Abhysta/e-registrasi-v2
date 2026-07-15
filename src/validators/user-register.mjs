import Joi from "joi";

const userRegister = Joi.object({
        fullName: Joi.string().required(),
        firstTitle: Joi.string().optional(),
        endTitle: Joi.string().optional(),
        NIP: Joi.string().required(),
        placeBirth: Joi.string().required(),
        dateBirth: Joi.date().required(),
        religion: Joi.string().required(),
        golongan: Joi.string().required(),
        jabatan: Joi.string().required(),
        unitKerja: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        nomorSuratTugas: Joi.string().required(),
        kodePelatihan: Joi.string().required(),
})

export {
        userRegister,
}