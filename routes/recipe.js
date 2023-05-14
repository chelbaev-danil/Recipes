var express = require('express');
var router = express.Router();

const controller = require('../controller/controller')

router.get(`/:id`, controller.showrecipe)

module.exports = router