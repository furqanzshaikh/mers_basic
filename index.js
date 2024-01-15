const express = require('express')
const cors= require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()


const userRouter = require('./routes/userRoute')
const server=express()
server.use(express.json())
server.use(cors())

mongoose.connect(process.env.URI)
.then(()=>{
    console.log('connected')
    server.listen(process.env.PORT||8000,(err)=>{
     if(err){console.log(err)}
    })
})
.catch(err=>console.log(err))



server.use(userRouter)



