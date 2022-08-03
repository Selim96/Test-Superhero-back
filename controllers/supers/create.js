const { Superhero } = require("../../models");

const create = async (req, res) => {
    const result = await Superhero.create({...req.body})
}

module.exports = create;