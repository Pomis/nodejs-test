var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Пизди пидоров' });
});

// база данных
var pg = require('pg');
var DATABASE_URL = "postgres://dnmnhsgqvszxdw:NW3xcQq5MJY1tFheQBwa6fvqmw@ec2-107-21-106-196.compute-1.amazonaws.com:5432/d5egq33ccg3ib2?ssl=true";
pg.connect(DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
      .query('SELECT table_schema,table_name FROM information_schema.tables;')
      .on('row', function(row) {
        console.log(JSON.stringify(row));
      });
});

module.exports = router;
