const service = require('../service/login-service');
module.exports = (req,res)=>{
    if(req.body.email && req.body.password){
        service.findUser(req.body.email, req.body.password).then((data)=>{
            console.log(data);
            if(data) res.send({result: data, message: "successful"});
            else res.status(401).send({message: "data not found", code: 401})

        }).catch((err)=>{
            res.send({message: "data not found"});
        })
        

    }
    else{
        
        res.status(401).send({message: "Invalid Data!!"})

    }
}