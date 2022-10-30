const mongoose = require('mongoose')
const { Schema } = mongoose


const movieSchema = new Schema ({
    title: { type: String },
    image: { type: String  },
    date_released: { type: Number },
    duration: { type: Number },
    genre: { type: String },
    description: {type: String },
    tagline: { type: String },

})


module.exports = mongoose.model('Movie', movieSchema)

