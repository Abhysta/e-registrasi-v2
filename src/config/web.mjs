import express from 'express';
import {route} from "../routes/route.mjs";
import {errorMiddleware} from "../middleware/error-middleware.mjs";

export const web = express()
web.use(express.json())
web.use(route)

web.use(errorMiddleware)