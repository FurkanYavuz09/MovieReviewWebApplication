const express = require('express')
const app = express.Router()
const Movie = require('./movie.js')

// API endpoints
app.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json(movie);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/:id/reviews', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      const { rating, review } = req.body;
      movie.reviews.push({ rating, review });
      movie.averageRating = calculateAverageRating(movie);
      await movie.save();
      res.status(201).json(movie);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/:id/reviews', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      res.status(404).json({ error: 'Movie not found' });
    } else {
      res.json(movie.reviews);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



// Helper function to calculate average rating
function calculateAverageRating(movie) {
  const totalReviews = movie.reviews.length;
  let totalRating = 0;
  movie.reviews.forEach((review) => {
    totalRating += review.rating;
  });
  return totalRating / totalReviews;
}

module.exports = app