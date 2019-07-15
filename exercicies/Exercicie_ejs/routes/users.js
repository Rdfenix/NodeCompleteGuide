const express = require('express')
const router = express.Router()

const usersData = require('./main')

router.get('/users', (req, res, next) => {
    console.log(usersData.users)
    res.render('users', {
        pageTitle: 'Users',
        users: usersData.users
    })
})

module.exports = router