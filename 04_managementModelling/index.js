import 'dotenv/config'
import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send('Hospital and ecommerce Management data Modelling')
})
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})

