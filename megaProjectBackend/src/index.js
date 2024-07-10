// require('dotenv').config({path:'./env'})
import 'dotenv/config'
import mongoose from 'mongoose'
import { DB_NAME } from './constant.js';
import express from 'express';

import connectDB from './db/db.js';


// connectDB()










const app = express ()

;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("DB connected")
        app.on("error", (error)=> {
            console.log("ERROR :: DB ::",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listing on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error in DB Connection :: ",error)
    }
})()


