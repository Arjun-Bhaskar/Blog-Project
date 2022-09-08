const service= require('../../service/blog-service');

module.exports= (req,res)=>{

    service.deleteBlog(req.params.id).then((data)=>{
        service.findBlogs().then((blogs)=>{
            res.send({message: "Blog deleted",result: blogs})

        }).catch((err)=>{
            res.status(401).send({message: "Something went wrong!!"})

        })
        
    }).catch((err)=>{
        res.status(401).send({message: "Something went wrong!!"})
    })

}