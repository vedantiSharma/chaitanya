var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});
var pool        = mysql.createPool({
  connectionLimit : 10, // default = 10
  host            : 'easylearning.guru',
  user            : 'kcc_student',
  password        : 'Kccitm.edu.in1',
  database        : 'kccStudent'
});
con.connect()





router.get('/test/query', function (req, res) {
  pool.getConnection(function (err, connection) {
      connection.query("SELECT * FROM kccStudent.VEDANTIS", function (err, rows) {
          connection.release();
          if (err) throw err;

          console.log(rows.length);
          res.send(JSON.stringify(rows));
      });
  });
});

router.get('/', function(req, res, next) {
    con.connect(function(err) {
        if (err) console.log("err");
        console.log("Connected to mySQL!");
      });
    res.render('login')
});

router.post('/about', function(req, res, next) {
    console.log(req.body)
    var sql = "INSERT INTO `VEDANTIS`(`email`, `pass`) \
    VALUES ('"+req.body.email+"', '"+req.body.pass+"');"
    console.log(sql)
   con.connect()
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);

      });
    
res.json({"Name":req.body})
});

router.get('/data', function(req, res, next) {
  console.log(req.query)
  var sql = "INSERT INTO `VEDANTIS` (`name`, `country`, `age`) \
  VALUES ('"+req.query.name+"', '"+req.query.country+"', '"+req.query.age+"');"
  console.log(sql)
 con.connect()
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);

    });
    
res.json({"Name":req.query})
});

router.get('/where', function(req, res, next) {
 
    console.log(req)
    res.json({name:"ved"})
  });

module.exports = router;
