const { Schema, model } = require("mongoose");
const Joi = require("joi");

const superSchema = Schema({
    nickname: {
        type: String,
        required: true
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
    image: {
        type: String,
        default: ""
    }
}, { versionKey: false, timestamps: true });

const Superhero = model("superhero", superSchema);

module.exports = {
    Superhero
}
