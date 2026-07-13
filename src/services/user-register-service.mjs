import {validateRegister} from "../validators/validation.mjs";
import {userRegister} from "../validators/user-register.mjs";
import {prisma} from "../config/database.mjs";
import Joi from "joi";

function userRegisterService (req) {
    const result = validateRegister(userRegister, req)

    const count = prisma.registerPelatihan.findFirst({
        where: {
            NIP : result.nip
        }
    })

    if (count) {
        res.status(200).send("Data already registered")
    }

    return prisma.registerPelatihan.create({
        data : {
            fullName: result.fullName,
            firstTitle: result.firstTitle,
            endTitle: result.endTitle,
            NIP: result.NIP,
            placeBirth: result.placeBirth,
            dateBirth: result.dateBirth,
            religion: result.religion,
            golongan: result.golongan,
            jabatan: result.jabatan
            unitKerja: result.unitKerja
            phone: result.phone,
            email: result.email,
            nomorSuratTugas: result.nomorSuratTugas
        }
    })

}

export {
    userRegisterService,
}