const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')


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

app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: undefined
    })
})

app.listen(3000)