import 'dotenv/config'
import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("Mongoose Data Modelling")
})


const port = process.env.PORT || 4000
app.listen(port, ()=>{
    console.log(`Server is running ${port}`)
})