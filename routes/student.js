var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.json({name : 'vedanti sharma' + "," + req.params.id});
//   res.render('index', { title: 'Express' });
});

module.exports = router;

