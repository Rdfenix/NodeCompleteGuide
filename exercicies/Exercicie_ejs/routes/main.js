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
        name: req.body.name
    })
})

exports.routes = router
exports.users = users