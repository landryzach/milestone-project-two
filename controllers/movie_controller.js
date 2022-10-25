const express = require('express')
const movie = express.Router()
const Movie = require('../models/movie.js')


movie.post('/', (req, res) => {
    Movie.create (req.body)
    .then(() => {
        res.redirect('/movie')
    })
    .catch(err => {
        console.log(err) 
        res.render('error404')
      })
})

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

//POST COMMENT
movie.post('/:id/comment', (req, res) => {
    Movie.findById(req.params.id)
    .then(movie => {
      Movie.create(req.body)
      .then(comment => {
        movie.comments.push(comment.id)
        movie.save()
        .then(() => {
          res.redirect(`/movie/${req.params.id}`)
        })
      })
      .catch(err => {
        res.render('error404')
      })
    })
  })
  
  //DELETE COMMENT
  movie.delete('/:id/comment/:commentId', (req, res) => {
    res.send('GET /movie/:id/comment/:commentId stub')
  })
  

module.exports = movie 