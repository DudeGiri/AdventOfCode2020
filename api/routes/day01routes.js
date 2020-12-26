var express = require('express');
var router = express.Router();

var day01 = require('../controllers/day01Controller');

// GET for two numbers adding to 2020.
router.get('/day01/findtwo', day01.report_repair_two);

// GET for three numbers adding to 2020.
router.get('/day01/findthree', day01.report_repair_three);

module.exports = router;