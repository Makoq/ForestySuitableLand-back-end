const express=require('express')
const config=require('./config/default')

const routes=require('./routes')

const app=express()







routes(app)



app.listen(config.port,()=>{
    console.log("project is running :",config.port)
})