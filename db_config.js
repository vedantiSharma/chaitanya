const mysql = require('mysql');
 var connection = mysql.createConnection({
    username: 'kcc_student',
    password: 'Kccitm.edu.in1',
    database: 'kccStudent',
    host : 'easylearning.guru',
    port: '3306'
 });


 connection.connect(function(err){
    if(!!err){
         console.log(err);
    }
    else{
        console.log("connected");
    }
 });
  module.exports  = connection;