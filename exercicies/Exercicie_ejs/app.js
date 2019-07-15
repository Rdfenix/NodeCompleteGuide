const port = 3000
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', 'views')

const usersRouter = require('./routes/users')
const mainRouter = require('./routes/main')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', mainRouter.routes)
app.use(usersRouter)

app.listen(port, () => {
    console.log(`Console running on port ${port}`)
})