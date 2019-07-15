const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path'),
    port = 3000

const usersRouter = require('./routes/users')
const mainRouter = require('./routes/main')

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use('/', usersRouter.routes)
app.use(mainRouter)

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Console running on port ${port}`)
})