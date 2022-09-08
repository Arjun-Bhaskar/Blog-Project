const exp = require('express');
const cors = require('cors');
const app = exp();
app.use(cors());

const http = require('http');

const server = http.Server(app);
app.use(exp.urlencoded({extended: false}));

app.use(exp.json());

require('./app/utility/db')();

require('./app/routes/signup-routes')(app);
require('./app/routes/login-routes')(app);
require('./app/routes/blog-route')(app);

server.listen(3300,()=>{
    console.log('port is running')
})