import {ResponseError} from "../error/response-error.js";


function validate(schema, req) {
    const result = schema.validate(req, {
        abortEarly: false
    });

    if ( result.error) {
        throw new ResponseError(404, result.error.message);
    } else {
        return result.value;
    }
}

export {
    validate
}