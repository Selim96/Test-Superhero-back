const { Schema, model } = require("mongoose");
const Joi = require("joi");

const superSchema = Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    real_name: {
        type: String,
        default: ""
    },
    origin_description: {
        type: String,
        default: ""
    },
    superpowers: {
        type: String,
        default: ""
    },
    catch_phrase: {
        type: String,
        default: ""
    },
    images: {
        type: Schema.Types.Array,
        default: []
    }
}, { versionKey: false, timestamps: true });

const createHero = Joi.object({
    nickname: Joi.string().required(),
    real_name: Joi.string(),
    origin_description: Joi.string(),
    superpowers: Joi.string().required(),
    catch_phrase: Joi.string(),
});

const joiSchemas = {
    createHero
}

const Superhero = model("superhero", superSchema);

module.exports = {
    Superhero,
    joiSchemas
}
