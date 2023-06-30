
const Movie = require('./movie');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://furkanyavuz0926:%4042Fyzdfx@countlyproject.pq8zfal.mongodb.net/', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))



  