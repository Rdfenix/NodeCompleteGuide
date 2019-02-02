const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res) => {
    //res.status(404).send('<h1>Page not found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)