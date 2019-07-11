const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router()

const adminData = require('./admin')

router.get('/', (req, res, next) => {
    //res.send('<h1>Hello express</h1>')
    console.log(adminData.products)
    const products = adminData.products
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'))
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    })
})

module.exports = router