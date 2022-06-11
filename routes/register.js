var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render("register-form");
});

router.post('/submit', function (req, res, next) {
    console.log(req.body);
    res.send("register succesed");
});

module.exports = router;







