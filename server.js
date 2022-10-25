// Modules & Globals
require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello world");
});

//MIDDLEWARE


//ROUTES
const movieController = require('./controllers/movie_controller')
app.use('/movie', movieController)

app.get('/', (req, res) => {
  res.send('Welcome to our movie list!')
})

app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
