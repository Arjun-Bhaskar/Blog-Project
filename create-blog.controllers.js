const service = require('../../service/blog-service');

module.exports = (req,res)=>{
    if(req.body && req.body.title && req.body.imageUrl && req.body.description){
        const obj = service.createBlogObj(req.body);
        service.saveData(obj).then(data=>{
            res.send({message: "Blog Added!!"})
        }).catch(err=>{
            res.status(401).send({message: "Something went wrong!!"})
        })
    }else{
        res.status(401).send({message: "Invalid Data!!"})
    }
}