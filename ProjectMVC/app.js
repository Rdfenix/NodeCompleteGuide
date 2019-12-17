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

database.execute('SELECT * FROM products')
    .then(result => {
        console.log('result', result[0])
    })
    .catch(err => {
        console.log('ERR', err)
    });

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRouter)

app.use(errorController.getErrorPage)

app.listen(3000)