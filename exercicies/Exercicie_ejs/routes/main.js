const express = require('express'),
    router = express.Router(),
    users = []

router.get('/', (req, res, next) => {
    console.log('veio aqui')
})

router.post('/', (req, res, next) => {
    users.push({
        name: req.body.name
    })
})

exports.routes = router
exports.users = users