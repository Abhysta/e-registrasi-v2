import { createRegister, updateRegister, getRegister } from "../services/training-register-service.mjs";

const createController = async (req, res, next) => {
  try {
    const result = await createRegister(req.body, req.files, req.user);
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const updateController = async (req, res, next) => {
  try {
    const result = await updateRegister(req.body);
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getController = async (req, res, next) => {
  try {
    const result = await getRegister(req.params.idPeserta);
    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

export { createController, updateController, getController };
