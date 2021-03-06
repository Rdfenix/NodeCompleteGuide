const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

// const expressHbs = require('express-handlebars')

// app.engine('hbs',
//     expressHbs({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );
// app.set('view engine', 'hbs');

app.set('view engine', 'ejs');
app.set('views', 'views')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouter.routes)
app.use(shopRouter)

app.use((req, res) => {
    //res.status(404).send('<h1>Page not found</h1>')
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: undefined
    })
})

app.listen(3000)