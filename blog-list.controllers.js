const service = require('../../service/blog-service');

module.exports = (req,res)=>{
    if(req.query && req.query.name){
        service.findBlogsByName(req.query.name).then(data=>{
            res.send({result: data, message: "successful"})
        }).catch(err=>{
            res.status(401).send({message: "Invalid Data!!"})
        })
    }else{
        service.findBlogs().then(data=>{
            res.send({result: data, message: "successful"})
        }).catch(err=>{
            res.status(401).send({message: "Invalid Data!!"})
        })
    }
}