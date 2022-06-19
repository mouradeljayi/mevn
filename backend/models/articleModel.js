const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title value']
    },
    description: {
        type: String,
        required: [true, 'Please add a description value']
    },
    city: {
        type: String,
        required: [true, 'Please add a city value']
    },
    imageUrl: {
        type: String,
        required: [true, 'Please add an image value']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please choose a category'],
        ref: 'Category'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
}, 
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Article', articleSchema)