
const Movie = require('./movie');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://furkanyavuz0926:%4042Fyzdfx@countlyproject.pq8zfal.mongodb.net/', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Example usage:
const newMovie = new Movie({
  title: 'Fight Club',
  description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
  releaseDate: new Date('1999-9-10'),
  averageRating: 4.4,
});

newMovie.save()
  .then((savedMovie) => {
    console.log('Movie saved:', savedMovie);
  })
  .catch((error) => {
    console.error('Error saving movie:', error);
  });


  