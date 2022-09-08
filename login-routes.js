const login = require('../controllers/login-controllers');

module.exports = (app)=>{
    app.post('/login',login)
}
