const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    path = require('path'),
    port = 3000


app.use(bodyParser.urlencoded({
    extended: true
}))


app.listen(port, () => {
    console.log(`Console running on port ${port}`)
})