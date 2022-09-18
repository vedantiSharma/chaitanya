var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.json({name : 'vedanti sharma' + "," + req.params.id});
//   res.render('index', { title: 'Express' });
});

module.exports = router;
 

     //**************find smallest natural number******//
//for(int a =0 ; a<a.length ; a++)       **5 7 9 2 3 5-> -1 9 2 3 5 -> 9 2 3 5 -> 6 3 5-> 2 5 ->  7
// if(value at a < value at a+1)
//add a and a+1                           51 35 21 12 15 -> 15 21 12 15->  37 12 15 ->24 15-> 8  
//ifvalue at 0 != end.length
//a+= 1;
//else  sub a-b
//a-= 1;


//print the magic matrix //
// sum = 0 
//for( i = 0 ; i<n ; i++)       **sum from left to right**
// sum =  sum[i]+[n-i]
  


 //  