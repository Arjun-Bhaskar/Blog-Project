const createBlog = require('../controllers/blogs/create-blog.controllers');
const blogList = require('../controllers/blogs/blog-list.controllers');
const deleteBlog = require('../controllers/blogs/delete-blog.controllers');
module.exports = (app)=>{
    app.post('/create/blog', createBlog);
    app.get('/blogs/list', blogList);
    app.delete('/delete/blog/:id',deleteBlog);

}
