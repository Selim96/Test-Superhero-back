const { Superhero } = require("../../models");

const deleteById = async (req, res) => {
    const { superId } = req.params;
    const result = await Superhero.findByIdAndRemove(superId);
    if (!result) {

    };
    res.json({
        "message": "Superhero deleted"
    });
}

module.exports = deleteById;