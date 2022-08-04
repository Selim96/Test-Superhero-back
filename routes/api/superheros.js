const express = require("express");
const { supers: cntrl } = require('../../controllers');
const { ctrlWrapper } = require("../../helpers");
const { validation, isValidId } = require("../../middlewares");
const { joiSchemas } = require("../../models");


const router = express.Router();

router.get('/', ctrlWrapper(cntrl.getAll) );

router.get('/:superId', isValidId, ctrlWrapper(cntrl.getById));

router.post('/', validation(joiSchemas.createHero), ctrlWrapper(cntrl.create));

router.patch('/:superId', isValidId, validation(joiSchemas.editImage), ctrlWrapper(cntrl.editImage));

router.delete('/:superId', isValidId, ctrlWrapper(cntrl.deleteById));

module.exports = router;