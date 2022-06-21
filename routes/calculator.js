var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render("calculator",{})
})
module.exports = router;