const user = require('../models/signup-model');

exports.findUser = (email,password)=>{
    return user.findOne({"email": email } );
    // "password": password
}
