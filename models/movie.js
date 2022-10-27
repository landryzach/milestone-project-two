const mongoose = require('mongoose')
const { Schema } = mongoose

const movieSchema = new Schema({
    title: { type: String, required: true },
    date_released: { type: Number },
    genre: { type: String },
    description: { type: String },
    image: { type: String },
    rating: { type: Number },
    duration: { tpye: Number },
    tagline: { type: String }  
  })

  module.exports = mongoose.model('Movie', movieSchema)