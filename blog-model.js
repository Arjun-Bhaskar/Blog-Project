const mongoose = require('mongoose');
// const { stringify } = require('querystring');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
        
    },
    description: {
        type: String,
        require: true
    },
    name: String
})

module.exports = mongoose.model('blogs',blogSchema);