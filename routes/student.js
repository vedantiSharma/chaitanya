var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
 console.log(req)
 res.json({name:"vedanti"})
 
    // res.render('index', { title: 'Express' });
});


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 console.log(req)
 res.json({name: "vedanti"})
    // res.send('respond with a resource');
});
router.get('/:da-:ta-:ch',function(req,res,next){
    console.log(req.params.da)
    res.json({name:req.params.da+" , "+req.params.ta+" and " +req.params.ch})
});
/* GET home page. */
router.get('/da', function(req, res, next) {
  res.render('teacher', { title:req.params.da});
}) ;
module.exports = router;
//router.get('/:da-:ta', function(req, res, next) {
  //  console.log(req.params.da)
    //res.json({name:req.params.da+" , "+req.params.ta +"="+ req.params.da+req.params.ta})
    
       // res.render('index', { title: 'Express' });
//});
//router.get('/:da-:ta-:ch', function(req, res, next) {
  //  console.log(req.params.da)
    //res.json({name:req.params.da+" , "+req.params.ta +"="+req.params.ta})

//});
