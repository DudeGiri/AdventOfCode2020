var express = require('express');
var router = express.Router();

var day02 = require('../controllers/day02Controller');

// GET for valid passwords part one
router.get('/partone', day02.password_checker_part_one);

// GET for valid passwords part two
router.get('/parttwo', day02.password_checker_part_two);

module.exports = router;