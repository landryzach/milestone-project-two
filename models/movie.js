const mongoose = require('mongoose')
const { Schema } = mongoose


const movieSchema = new Schema ({
    name: { type: String },
    image: { type: String  },
    date_released: { type: Number },
    description: {type: String },
    stars: { type: Number },

})


module.exports = mongoose.model('Movie', movieSchema)

