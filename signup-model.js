const mongoose = require('mongoose');
// const { stringify } = require('querystring');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required:true
        // minlength: 3,
        // maxlength: 20
    },
    lastName: {
        type: String,
        required:true
        
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    phoneNo: {
        type: String,
        unique:true,
        required: true
    },
    password: String
})

module.exports = mongoose.model('blogdb',userSchema);