'use strict';
var fs = require('fs');

exports.password_checker_part_one = function(req, res) {
  var input = fs.readFileSync('./input/day02.txt', 'utf8').split('\r\n');

  var valid = 0;
  for (var i = 0; i != input.length; i++) {
    const items = input[i].match(/\w+/g);
    const min = parseInt(items[0]);
    const max = parseInt(items[1]);
    const letter = items[2];
    const pwd = items[3];

    const regex = new RegExp(letter, 'g');
    const count = (pwd.match(regex) || []).length;
    if (count >= min && count <= max) {
      valid++;
    }
  }

  return res.status(200).json(
    {
      valid
    }
  );
};

exports.password_checker_part_two = function(req, res) {
  var input = fs.readFileSync('./input/day02.txt', 'utf8').split('\r\n');

  var valid = 0;
  for (var i = 0; i != input.length; i++) {
    const items = input[i].match(/\w+/g);
    const first = parseInt(items[0]) - 1;
    const second = parseInt(items[1]) - 1;
    const letter = items[2];
    const pwd = items[3];

    if ((pwd[first] === letter && pwd[second] !== letter) || (pwd[second] === letter && pwd[first] !== letter)) {
      valid++;
    }
  }

  return res.status(200).json(
    {
      valid
    }
  );
};