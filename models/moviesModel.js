var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moviesSchema = new Schema({
  'code': Number,
  'title': String,
  'genre': String,
  'rating': Number,
  'release': Date
}, {versionKey: false});

module.exports = mongoose.model('movies', moviesSchema);
