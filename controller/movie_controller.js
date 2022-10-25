const express = require('express')
const movie = express.Router()
const Movie = require('../models/movie.js')


movie.get('/', (req, res) => {
    Movie.find()
        .then(foundMovie => {
            res.send(foundMovie)
        })
        .catch(err => {
            console.log(err) 
            res.render('error404')
          })
})         

movie.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(foundMovies => {
            res.render(foundMovies)
            })
            .catch(err => {
                console.log(err) 
                res.render('error404')
              })
        })

movie.post('/', (req, res) => {
    Movie.create (req.body)
    .then(foundMovie => {
        res.send(foundMovie)
    })
    .catch(err => {
        console.log(err) 
        res.render('error404')
      })
})

movie.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id) 
      .then(deletedMovie => { 
        res.status(303).redirect('/movie')
      })
      .catch(err => {
        console.log(err) 
        res.render('error404')
      })
})


// export
module.exports = movie       