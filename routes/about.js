var express = require('express');
var router = express.Router();
const { profile } = require('../data/data.json');

//Router for the `about` page. Sends profile information through the profile obj retrieved from the JSON data
router.get('/', function(req, res, next) {
    res.render('about', {profile});
});

module.exports = router;
