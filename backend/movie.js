

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
 
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;


