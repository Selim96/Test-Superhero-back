const { isValidObjectId } = require("mongoose");
const { createError } = require('../helpers');

const isValidId = (req, res, next) => {
    const { superId } = req.params;
    if (!isValidObjectId(superId)) {
        next(createError(400, "Not Id"));
        return;
    }
    next();
}

module.exports = isValidId;