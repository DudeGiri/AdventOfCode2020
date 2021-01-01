var express = require('express');
var router = express.Router();

var day01 = require('../controllers/day01Controller');

// GET for two numbers adding to 2020.
router.get('/partone', day01.report_repair_part_one);

// GET for three numbers adding to 2020.
router.get('/parttwo', day01.report_repair_part_two);

module.exports = router;