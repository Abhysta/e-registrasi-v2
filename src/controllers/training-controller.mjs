import {trainingService} from "../services/training-service.mjs";

const trainingController = async (req, res, next) => {
    try {
        const result = await trainingService(req.body);
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
}

export {
    trainingController
}