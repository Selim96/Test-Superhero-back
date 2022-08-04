const express = require("express");
const { supers: cntrl } = require('../../controllers');
const { ctrlWrapper } = require("../../helpers");
const { validation } = require("../../middlewares");
const { joiSchemas } = require("../../models");


const router = express.Router();

router.get('/', ctrlWrapper(cntrl.getAll) );

router.get('/:superId', ctrlWrapper(cntrl.getById));

router.post('/', validation(joiSchemas.createHero), ctrlWrapper(cntrl.create));

router.patch('/:superId', validation(joiSchemas.editImage), ctrlWrapper(cntrl.editImage));

router.delete('/:superId', ctrlWrapper(cntrl.deleteById));

module.exports = router;