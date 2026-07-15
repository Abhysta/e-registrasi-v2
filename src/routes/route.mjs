import express from "express";
import {registerController} from "../controllers/user-controller.mjs";
import {trainingController} from "../controllers/training-controller.mjs";


const route = express.Router()
route.post("/register-user", registerController);
route.post("/training-register", trainingController);

export {
    route
}