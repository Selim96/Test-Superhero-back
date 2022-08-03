const express = require("express");
const { route } = require("../../app");
const {supers : cntrl} = require('../../controllers')


const router = express.Router();

router.get('/', cntrl.getAll);

router.get('/:superId', cntrl.getById);

router.post('/', cntrl.create);



module.exports = router;