import Joi from "joi";

const createRegisterValidation = Joi.object({
  bersedia: Joi.number().valid(0, 1).required(),
  nama: Joi.string().required(),
  nip_nik: Joi.string().allow(null, "").optional(),
  tempat_lahir: Joi.string().allow(null, "").optional(),
  tgl_lahir: Joi.date().allow(null).optional(),
  no_hp: Joi.string().allow(null, "").optional(),
  email: Joi.string().email().allow(null, "").optional(),
  ttd: Joi.string().allow(null, "").optional(),
  gelar_depan: Joi.string().allow(null, "").optional(),
  gelar_belakang: Joi.string().allow(null, "").optional(),
  jabatan: Joi.string().allow(null, "").optional(),
  sprint: Joi.string().allow(null, "").optional(),
  foto: Joi.string().allow(null, "").optional(),
  nama_satuan: Joi.string().allow(null, "").optional(),
  id_unit: Joi.number().allow(null).optional(),
  mulai_registrasi: Joi.date().allow(null).optional(),
  batas_registrasi: Joi.date().allow(null).optional(),
});

const updateRegisterValidation = Joi.object({
  id_peserta: Joi.number().required(),
  id_assign: Joi.number().required(),
  nama: Joi.string().optional(),
  nip_nik: Joi.string().allow(null, "").optional(),
  tempat_lahir: Joi.string().allow(null, "").optional(),
  tgl_lahir: Joi.date().allow(null).optional(),
  no_hp: Joi.string().allow(null, "").optional(),
  email: Joi.string().email().allow(null, "").optional(),
  ttd: Joi.string().allow(null, "").optional(),
  gelar_depan: Joi.string().allow(null, "").optional(),
  gelar_belakang: Joi.string().allow(null, "").optional(),
  jabatan: Joi.string().allow(null, "").optional(),
  sprint: Joi.string().allow(null, "").optional(),
  foto: Joi.string().allow(null, "").optional(),
  nama_satuan: Joi.string().allow(null, "").optional(),
  id_unit: Joi.number().allow(null).optional(),
});

export { createRegisterValidation, updateRegisterValidation };
