const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000)