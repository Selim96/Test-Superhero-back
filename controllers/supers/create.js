const { Superhero } = require("../../models");

const create = async (req, res) => {
    const result = await Superhero.create({ ...req.body });
    res.status(201).json(result);
}

module.exports = create;