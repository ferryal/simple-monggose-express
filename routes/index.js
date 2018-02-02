var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var moviesModel = require('../models/moviesModel.js');
var moviesController = require('../controllers/moviesController.js');

/* GET */
router.get('/', moviesController.list);

/* GET by code */
router.get('/:id', moviesController.show);

/* GET show by genre */
router.get('/genre/:genre', moviesController.showGenre);

/* GET show by genre */
router.get('/rating/:rating', moviesController.showRating);

/* POST */
router.post('/', moviesController.create);

/* PUT */
router.put('/:id', moviesController.update);

/* DELETE */
router.delete('/:id', moviesController.remove);

module.exports = router;
