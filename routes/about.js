var express = require('express');
var router = express.Router();
const { profile } = require('../data/data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {profile});
});

module.exports = router;
