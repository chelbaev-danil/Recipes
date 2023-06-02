var express = require("express");
var router = express.Router();
var controller = require('../controller/recipe-controller')

router.get("/:id", controller.getRecipe)

module.exports = router;
