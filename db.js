const mongoose = require('mongoose');

module.exports = ()=>{
    mongoose.connect("mongodb://localhost:27017/blogdb",{
        useNewUrlParser: true
    }).then(()=>{
        console.log("connection done")
    }).catch((err)=>{
        console.log("error",err);
    })
}
