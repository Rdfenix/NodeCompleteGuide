const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const errorController = require('./controllers/error')

app.set('view engine', 'ejs');
app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRouter)

app.use(errorController.getErrorPage)

app.listen(3000)