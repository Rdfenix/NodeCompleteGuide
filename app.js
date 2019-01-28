const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const adminRouter = require('./routes/admin')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(adminRouter)



app.use('/', (req, res, next) => {
    res.send('<h1>Hello express</h1>')
})

app.listen(3000)
