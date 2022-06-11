var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   // res.render('index', { title: 'Express' });
     router.post('/getLogin', function(req, res, next) {
         console.log(req.body);//print the req
         
        res.render('index', { title: req.body.fname});
  });
});


module.exports = router;
