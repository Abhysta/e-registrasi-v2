import { validate } from "../validators/validation.mjs";
import { createRegisterValidation, updateRegisterValidation } from "../validators/training-register-validation.mjs";
import { ResponseError } from "../error/response-error.js";
import { prismaClient } from "../config/database.mjs";
import crypto from "node:crypto";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const uploadDir = path.join(__dirname, "../../uploads");

const ensureUploadDir = () => {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }
};

const saveFile = async (file) => {
  ensureUploadDir();
  const ext = path.extname(file.name);
  const uniqueName = `${crypto.randomUUID()}${ext}`;
  const uploadPath = path.join(uploadDir, uniqueName);
  await file.mv(uploadPath);
  return { namaFile: file.name, pathFile: uniqueName };
};

const createRegister = async (body, files) => {
  const result = validate(createRegisterValidation, body);
  const { bersedia, nama_satuan, id_unit, mulai_registrasi, batas_registrasi, ...pesertaData } = result;

  // Create tabel_peserta
  const peserta = await prismaClient.tabelPeserta.create({
    data: {
      nama: pesertaData.nama,
      nip_nik: pesertaData.nip_nik,
      tempat_lahir: pesertaData.tempat_lahir,
      tgl_lahir: pesertaData.tgl_lahir,
      no_hp: pesertaData.no_hp,
      email: pesertaData.email,
      ttd: pesertaData.ttd,
    },
  });

  // Create satuan_kerja
  const satker = await prismaClient.satuanKerja.create({
    data: {
      nama_satuan: nama_satuan || "",
      id_unit: id_unit || null,
    },
  });

  // Create tbl_assign
  const assign = await prismaClient.tblAssign.create({
    data: {
      id_peserta: peserta.id,
      id_satker: satker.id,
      bersedia,
      gelar_depan: pesertaData.gelar_depan,
      gelar_belakang: pesertaData.gelar_belakang,
      jabatan: pesertaData.jabatan,
      sprint: pesertaData.sprint,
      foto: pesertaData.foto,
      mulai_registrasi,
      batas_registrasi,
      tgl_registrasi: new Date(),
    },
  });

  // Upload files if present
  if (bersedia === 1 && files && files.berkas) {
    const uploaded = await saveFile(files.berkas);
    await prismaClient.masterBerkas.create({
      data: {
        id_assign: assign.id,
        nama_berkas: uploaded.pathFile,
      },
    });
  }

  if (bersedia === 0 && files && files.berkas_penolakan) {
    const uploaded = await saveFile(files.berkas_penolakan);
    await prismaClient.masterBerkas.create({
      data: {
        id_assign: assign.id,
        nama_berkas: `penolakan_${uploaded.pathFile}`,
      },
    });
  }

  return {
    status: 200,
    message: "Data Training berhasil ditambahkan",
  };
};

const updateRegister = async (body) => {
  const result = validate(updateRegisterValidation, body);
  const { id_peserta, id_assign, nama_satuan, id_unit, ...pesertaData } = result;

  // Find the assign record
  const assign = await prismaClient.tblAssign.findFirst({
    where: { id: id_assign, id_peserta },
    select: { id: true, mulai_registrasi: true, batas_registrasi: true, id_satker: true },
  });

  if (!assign) {
    throw new ResponseError(404, "Data tidak ditemukan");
  }

  // Check registration window
  const now = new Date();
  if (
    assign.mulai_registrasi &&
    assign.batas_registrasi &&
    (now < assign.mulai_registrasi || now > assign.batas_registrasi)
  ) {
    throw new ResponseError(400, "Diluar waktu registrasi");
  }

  // Update tabel_peserta
  if (Object.keys(pesertaData).length > 0) {
    await prismaClient.tabelPeserta.update({
      where: { id: id_peserta },
      data: pesertaData,
    });
  }

  // Update tbl_assign jabatan/gelar/foto/sprint
  await prismaClient.tblAssign.update({
    where: { id: id_assign },
    data: {
      gelar_depan: pesertaData.gelar_depan,
      gelar_belakang: pesertaData.gelar_belakang,
      jabatan: pesertaData.jabatan,
      sprint: pesertaData.sprint,
      foto: pesertaData.foto,
    },
  });

  // Update satuan_kerja
  if (nama_satuan || id_unit !== undefined) {
    await prismaClient.satuanKerja.update({
      where: { id: assign.id_satker },
      data: {
        ...(nama_satuan && { nama_satuan }),
        ...(id_unit !== undefined && { id_unit }),
      },
    });
  }

  return {
    status: 200,
    message: "Data Training berhasil diupdate",
  };
};

const getRegister = async (idPeserta) => {
  const parsed = parseInt(idPeserta);
  if (isNaN(parsed)) {
    throw new ResponseError(400, "id_peserta tidak valid");
  }

  const data = await prismaClient.tblAssign.findMany({
    where: { id_peserta: parsed },
    select: {
      id: true,
      id_peserta: true,
      id_satker: true,
      bersedia: true,
      gelar_depan: true,
      gelar_belakang: true,
      jabatan: true,
      sprint: true,
      foto: true,
      tgl_registrasi: true,
      mulai_registrasi: true,
      batas_registrasi: true,
    },
  });

  return {
    status: 200,
    data,
  };
};

export { createRegister, updateRegister, getRegister };
