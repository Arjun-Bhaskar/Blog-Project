const signup = require('../controllers/signup-controllers');

module.exports = (app)=>{
    app.post('/create/user',signup)
}