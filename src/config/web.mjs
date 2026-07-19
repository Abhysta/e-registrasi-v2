import express from 'express';
import fileUpload from 'express-fileupload';
import { route } from "../routes/route.mjs";
import { errorMiddleware } from "../middleware/error-middleware.mjs";

export const web = express();

web.use(express.json());
web.use(fileUpload({
    limits: { fileSize: 10 * 1024 * 1024 },
    abortOnLimit: true,
}));
web.use(route);
web.use(errorMiddleware);
