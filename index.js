const express = require('express')
const posts = require('./posts')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {posts: posts})
})

app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})