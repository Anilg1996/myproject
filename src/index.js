
// const bodyParser = require('body-parser')
const express= require('express')
const mongoose = require('mongoose')
const route=require('./route/route')

const app=express()

app.use(express.json())


mongoose.connect('mongodb+srv://kanil485333:anil16shalini@project1.lboaf6t.mongodb.net/Anil1997-db', {useNewUrlParser: true})
.then(()=> console.log("MongoDB connected"))
.catch((error)=> console.log(error))

app.listen(process.env.PORT || 3000,function (){
   console.log("Port connected to 3000")
})  

app.use('/',route)

