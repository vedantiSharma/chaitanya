var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "easylearning.guru",
  user: "kcc_student",
  password: "Kccitm.edu.in1",
  database: "kccStudent"
});
// var pool        = mysql.createPool({
//   connectionLimit : 10, // default = 10
//   host            : 'easylearning.guru',
//   user            : 'kcc_student',
//   password        : 'Kccitm.edu.in1',
//   database        : 'kccStudent'
// });
con.connect()

router.get('/', function (req, res, next) {
  console.log("Nitya");
  con.connect(function (err) {
    console.log("HARSH")
    if (err) console.log("err");
    console.log("Connected!");
  });
  // modelLogin.a(modelLogin.pandy.name)
  console.log("himani")
  console.log("SIR")
  console.log("BITTU")
  res.render('login')
});

router.get('/getLogin', function (req, res, next) {


  con.query("select * from form", function (err, result) {
    if (err) throw err;
    console.log(result);
    res.render('login', { "data": result })
  });

});

router.post('/updateLogin', function (req, res, next) {
  console.log(req.body)
  res.json({ "Name": "Hello" })
});

router.post('/deleteLogin', function (req, res, next) {
  console.log(req.body.id)

  con.query("DELETE FROM form where id ="+req.body.id, function (err, result) {
    if (err) res.json({code:0});
    console.log(result);
    res.json({code:1})
  });
});

router.post('/getLogin', function (req, res, next) {
  getLoginPost(req, res, next)
  
  
});

router.all('/getPost', function (req, res, next) {
  console.log(req.body)
  if (req.body) {
    //do something
  } else {
    //do something else
  }
  
  console.log(req.body.pass)
  res.json({ "Name": req.body })
});

module.exports = router;



// router.get('/test/query', function (req, res) {
//   pool.getConnection(function (err, connection) {
//       connection.query("SELECT * FROM kccStudent.VEDANTIS", function (err, rows) {
//           connection.release();
//           if (err) throw err;

//           console.log(rows.length);
//           res.send(JSON.stringify(rows));
//       });
//   });
// });

// router.get('/', function(req, res, next) {
//     con.connect(function(err) {
//         if (err) console.log("err");
//         console.log("Connected to mySQL!");
//       });
//     res.render('login')
// });

// router.post('/about', function(req, res, next) {
//     console.log(req.body)
//     var sql = "INSERT INTO `kccStudent`.`VEDANTIS`(`email`, `pass`) \
//     VALUES ('"+req.body.email+"', '"+req.body.pass+"');"
//     console.log(sql)
//    con.connect()
//       con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result);

//       });
//       // var sql1 = "select * from `form_details`"
//       // con.query(sql1, function (err, result) {
//       //   if (err) throw err;
//       //   console.log(result);
//       // });
// res.json({"Name":req.body})
// });

// router.get('/data', function(req, res, next) {
//   console.log(req.query)
//   var sql = "INSERT INTO `form_details` (`name`, `country`, `age`) \
//   VALUES ('"+req.query.name+"', '"+req.query.country+"', '"+req.query.age+"');"
//   console.log(sql)
//  con.connect()
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log(result);

//     });
//     // var sql1 = "select * from `form_details`"
//     // con.query(sql1, function (err, result) {
//     //   if (err) throw err;
//     //   console.log(result);
//     // });
// res.json({"Name":req.query})
// });

// router.get('/where', function(req, res, next) {
 
//     console.log(req)
//     res.json({name:"ved"})
//   });

// module.exports = router;
