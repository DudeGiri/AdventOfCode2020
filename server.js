var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/day01', require('./api/routes/day01routes'));
app.use('/day02', require('./api/routes/day02routes'));

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Advent of Code 2020 magic started on: ' + port);