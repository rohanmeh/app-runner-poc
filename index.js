const express = require('express')

//set up express API

const app = express()

//set up routes

app.get('/', (req, res) => {
    res.send('Hello World')
})

//set up server

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})