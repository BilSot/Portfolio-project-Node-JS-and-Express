var createError = require('http-errors');
var express = require('express');
var router = express.Router();
const { profile } = require('../data/data.json');
const { projects } = require('../data/data.json');

//Router for the project's page. It throws an error if a page with non-existing id is requested
//It gets the id from the url params and filters the projects array against that id
//The matching object is passed for rendering to populate the html's content
router.get('/:id', function(req, res, next) {
    const projectId = req.params.id;
    const projectObj = projects.find( ( obj ) => obj.id === +projectId );
    if(!projectObj){
        next(createError(404));
    }
    res.render('project', {profile, projectObj});
});

module.exports = router;
