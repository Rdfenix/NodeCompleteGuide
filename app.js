const express = require('express')
const app = express()

app.use('/', (req, res, next) => {
    res.send('<h1>Hello express</h1>')
})

app.use('/add-product', (req, res, next) => {
    res.send('<h1>Add product</h1>')
})

app.listen(3000)


/*const http = require('http');
const express = require('express');
const app = express();

//const routes = require('./routes');

//console.log(routes.someText);

const server = http.createServer(app);

server.listen(3000);*/