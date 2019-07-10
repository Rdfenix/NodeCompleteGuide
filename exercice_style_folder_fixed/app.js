const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const mainPage = require('./routes/main')
const usersPage = require('./routes/users')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainPage)
app.use(usersPage)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, () => (
    console.log('port 300 on air')
))