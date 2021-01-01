'use strict';
var fs = require('fs');

exports.report_repair_part_one = function(req, res) {
  var input = fs.readFileSync('./input/day01.txt', 'utf8').split('\r\n').map(Number);
  input.sort(function(a, b){return a-b});
  var left = 0;
  var right = input.length - 1;
  const expectedSum = 2020;

  // two pointers technique
  while (left < right) {
    var expense1 = input[left];
    var expense2 = input[right];
    if (expense1 + expense2 === expectedSum) { 
      return res.status(200).json(
        {
          expense1,
          expense2,
          result: expense1 * expense2
        });
    } else if (expense1 + expense2 < expectedSum) {
      left++;
    } else { // expense1 + expense2 > expectedSum
      right--;
    }
  }

  res.status(400).send('Unable to find a match');
};

exports.report_repair_part_two = function(req, res) {
  var input = fs.readFileSync('./input/day01.txt', 'utf8').split('\r\n').map(Number);
  input.sort(function(a, b){return a-b});
  const expectedSum = 2020;

  // still two pointers technique
  // with extra incrementing index
  for (var index = 0; index < input.length - 2; index++) {
    var left = index + 1;
    var right = input.length - 1;
  
    while (left < right) {
      var expense1 = input[index];
      var expense2 = input[left];
      var expense3 = input[right];
      if (expense1 + expense2 + expense3 === expectedSum) { 
        return res.status(200).json(
          {
            expense1,
            expense2,
            expense3,
            result: expense1 * expense2 * expense3
          });
      } else if (expense1 + expense2 + expense3 < expectedSum) {
        left++;
      } else { // expense1 + expense2 + expense3 > expectedSum
        right--;
      }
    }
  }

  res.status(400).send('Unable to find a match');
};