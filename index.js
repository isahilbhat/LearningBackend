require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Sahil Bhat is learning Javascript backend')
})

app.get('/insta', (req, res) => {
    res.send("Sahil Bhat's Instagram ID: isahilbhat")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please login to your account</h1>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})