const express = require('express')
const mongoose = require('mongoose')

const userRouter = require('./routers/user_router')

const app = express()

mongooseConnector();

userRouter.get('/', (req, res)=>{
    console.log('get')
    res.write('hi')
    res.end()
})


app.listen(3000, ()=>{
    console.log('listen 3000')
})


function mongooseConnector(){
    mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true, useUnifiedTopology: true})
}