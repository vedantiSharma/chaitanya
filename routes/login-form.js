var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
    res.render("login-form");
});

router.post('/submit', function (req, res, next) {
    console.log(req.body);
    res.send("login succesed");
});

module.exports = router;

