var moviesModel = require('../models/moviesModel.js');

/**
 * moviesController.js
 *
 * @description :: Server-side logic for managing moviess.
 */
module.exports = {

  /**
     * moviesController.list()
     */
  list: function(req, res) {
    moviesModel.find(function(err, moviess) {
      if (err) {
        return res.status(500).json({message: 'Error when getting movies.', error: err});
      }
      return res.json(moviess);
    });
  },

  /**
     * moviesController.show()
     */
  show: function(req, res) {
    var code = req.params.code;
    moviesModel.findOne({
      code: code
    }, function(err, movies) {
      if (err) {
        return res.status(500).json({message: 'Error when getting movies.', error: err});
      }
      if (!movies) {
        return res.status(404).json({message: 'No such movies'});
      }
      return res.json(movies);
    });
  },
  /**
     * moviesController.showGenre()
     */
  showGenre: function(req, res) {
    var genre = req.params.genre;
    moviesModel.find({
      genre: genre
    }, (err, movies) => {
      if (err) {
        return res.status(500).json({message: 'Error when getting movies by genre', error: err})
      }
      if (!movies) {
        return res.status(404).json({message: 'No such movies'});
      }
      return res.json(movies)
    });
  },

  /**
     * moviesController.showRating()
     */
  showRating: function(req, res) {
    var rating = req.params.rating;
    moviesModel.find({
      rating: rating
    }, (err, movies) => {
      if (err) {
        return res.status(500).json({message: 'Error when getting movies by genre', error: err})
      }
      if (!movies) {
        return res.status(404).json({message: 'No such movies'});
      }
      return res.json(movies)
    });
  },

  /**
     * moviesController.create()
     */
  create: function(req, res) {
    var movies = new moviesModel({code: req.body.code, title: req.body.title, genre: req.body.genre, rating: req.body.rating, release: req.body.release});

    movies.save(function(err, movies) {
      if (err) {
        return res.status(500).json({message: 'Error when creating movies', error: err});
      }
      return res.status(201).json(movies);
    });
  },

  /**
     * moviesController.update()
     */
  update: function(req, res) {
    var id = req.params.id;
    moviesModel.findOne({
      _id: id
    }, function(err, movies) {
      if (err) {
        return res.status(500).json({message: 'Error when getting movies', error: err});
      }
      if (!movies) {
        return res.status(404).json({message: 'No such movies'});
      }
      movies.code = req.body.code
        ? req.body.code
        : movies.code;
      movies.title = req.body.title
        ? req.body.title
        : movies.title;
      movies.genre = req.body.genre
        ? req.body.genre
        : movies.genre;
      movies.rating = req.body.rating
        ? req.body.rating
        : movies.rating;
      movies.release = req.body.release
        ? req.body.release
        : movies.release;

      movies.save(function(err, movies) {
        if (err) {
          return res.status(500).json({message: 'Error when updating movies.', error: err});
        }

        return res.json(movies);
      });
    });
  },

  /**
     * moviesController.remove()
     */
  remove: function(req, res) {
    var id = req.params.id;
    moviesModel.findByIdAndRemove(id, function(err, movies) {
      if (err) {
        return res.status(500).json({message: 'Error when deleting the movies.', error: err});
      }
      return res.status(204).json();
    });
  }
};
