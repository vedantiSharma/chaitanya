var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 console.log(req)
 res.json({name: "vedantis"})
    // res.send('respond with a resource');
});
router.get('/:da-:ta-:ch',function(req,res,next){
    console.log(req.params.da)
    res.json({name:req.params.da+","+req.params.ch+"and"})
})
module.exports = router;
