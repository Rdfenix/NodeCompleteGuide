const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

const errorController = require('./controllers/error')
const database = require('./util/database');

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

database.sync().then(result => {
    console.log('Result ', result)
    app.listen(3000)
}).catch(err => console.log('Err', err))

//app.listen(3000)