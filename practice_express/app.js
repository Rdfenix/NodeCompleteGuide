const express = require('express')
const app = express()

const users = ['Jimmy', 'Sanders', 'Agatha']

const showOneUser = (res, next) => {
    res.send('<h1>' + users[0] + '</h1>')
}

const showUsers = () => (
    users.map(user => user)
)

app.use('/users', (req, res, next) => {
    res.send(showUsers())
})

app.use('/', (req, res, next) => {
    showOneUser(res, next)
})

app.listen(3000, () => {
    console.log('porta 3000')
})