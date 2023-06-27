// require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
mongoose.connect('mongodb+srv://furkanyavuz0926:%4042Fyzdfx@countlyproject.pq8zfal.mongodb.net/', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const moviesRouter = require('./movie_api.js')
app.use('/movies', moviesRouter)


app.use(cors());



// Start the server
const port = 5000;
app.listen(port, () => {

  console.log('Server Started');
  console.log(`Server listening on port ${port}`);
});
