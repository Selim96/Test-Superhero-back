const express = require("express");
const { supers: cntrl } = require('../../controllers');
const { ctrlWrapper } = require("../../helpers");
const { validation, isValidId, upload } = require("../../middlewares");
const { joiSchemas } = require("../../models");


const router = express.Router();

router.get('/', ctrlWrapper(cntrl.getAll) );

router.get('/:superId', isValidId, ctrlWrapper(cntrl.getById));

router.post('/',upload.array("images", 10), validation(joiSchemas.createHero), ctrlWrapper(cntrl.create));

router.patch('/:superId', isValidId, upload.array('images', 10), ctrlWrapper(cntrl.editImage));

router.delete('/:superId', isValidId, ctrlWrapper(cntrl.deleteById));

module.exports = router;