const express = require("express");
const mongoose = require('mongoose') 
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const path = require('path')

app.use(express.json())

const movieController = require('./controller/movie_controller.js')
  app.use('/movie', movieController);

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.use(express.static(path.join(__dirname, 'front-end-react', 'build')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end-react', 'build'));
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port`, process.env.PORT)
});
