const { Superhero } = require("../../models");

const getById = async (req, res) => {
    const { superId } = req.params;
    const result = await Superhero.findById(superId, "-createdAt -updatedAt");
    res.json(result)
}

module.exports = getById;