import express from "express";
import { verificationMiddleware } from "../middleware/verification-middleware.mjs";
import { createController, updateController, getController } from "../controllers/training-register-controller.mjs";
import { getUserController } from "../controllers/user-controller.mjs";

const route = express.Router();

// User
route.get("/api/user", verificationMiddleware, getUserController);

// Training Register
route.post("/api/training-register", verificationMiddleware, createController);
route.patch("/api/training-register", verificationMiddleware, updateController);
route.get("/api/training-register/:idPeserta", verificationMiddleware, getController);

export { route };
