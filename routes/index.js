var express = require('express');
var router = express.Router();
const { profile } = require('../data/data.json');
const { previews } = require('../data/data.json');

//Router for the home page. It sends information for the projects' previews through the `previews` obj, retrieved from the JSON data
//Since the index page extends the layout page, the `profile` obj needs to be passed in too
router.get('/', function(req, res, next) {
  res.render('index', {profile, previews});
});

module.exports = router;
