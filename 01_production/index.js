require('dotenv').config()
const express = require('express')


const app = express()

const port = 4000

app.get('/',(req,res)=>{
    res.send("Hello world")
})

app.get('/linkedIn',(req,res)=>{
    res.send('batman listing!!!!')
})

app.get('/login',(req,res)=>{
    res.send(`<h1> Learning chai</h1>`)
})

app.get('/youtube',(req,res)=>{
    res.send(`<h2>Joker youtube</h2>`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})