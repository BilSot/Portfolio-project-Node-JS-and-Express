var createError = require('http-errors');
var express = require('express');
var router = express.Router();
const { profile } = require('../data/data.json');
const { projects } = require('../data/data.json');

/* GET home page. */
router.get('/:id', function(req, res, next) {
    const projectId = req.params.id;
    const projectObj = projects.find( ( obj ) => obj.id === +projectId );
    if(!projectObj){
        next(createError(404));
    }
    res.render('project', {profile, projectObj});
});

module.exports = router;
