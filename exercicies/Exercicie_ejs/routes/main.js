const express = require('express'),
    router = express.Router(),
    users = []

router.get('/', (req, res, next) => {
    res.render('main', {})
})

router.post('/add-user', (req, res, next) => {
    users.push({
        name: req.body.name
    })
})

exports.routes = router
exports.users = users