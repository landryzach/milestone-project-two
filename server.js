const express = require("express");
const mongoose = require('mongoose') 
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();


app.get("/", (req, res) => {
  res.send("Hello world");
});

const movieController = require('./controller/movie_controller.js')
  app.use('/movie', movieController)

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
