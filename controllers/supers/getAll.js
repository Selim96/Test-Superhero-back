const { Superhero } = require("../../models");

const getAll = async (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;
    const result = await Superhero.find({}, "-createdAt -updatedAt", { skip, limit: Number(limit) }).populate("nickname");
    res.json(result);
}

module.exports = getAll;