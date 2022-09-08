const blog = require('../models/blog-model');


exports.createBlogObj = (payload)=>{
    return new blog({
        title: payload.title,
        imageUrl: payload.imageUrl,
        description: payload.description,
        name: payload.name
    });
}
exports.saveData = (obj)=>{
    return obj.save();
}

exports.findBlogs = ()=>{
    return blog.find();
}

exports.findBlogsByName = (name)=>{
    return blog.find({ "name": name });
}

exports.deleteBlog = (id)=>{
    return blog.deleteOne({_id: id})

}