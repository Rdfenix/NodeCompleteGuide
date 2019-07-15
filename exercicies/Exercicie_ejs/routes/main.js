const express = require('express')
const router = express.Router()
const users = []

router.get('/', (req, res, next) => {
    res.render('main', {
        pageTitle: 'Main'
    })
})

router.post('/add-user', (req, res, next) => {
    users.push({
        name: req.body.userName
    })
    res.redirect('/users')
})

exports.routes = router
exports.users = users