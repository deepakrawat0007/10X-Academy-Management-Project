const express = require('express')
const app = express()
const Classes = require('./models/classModel')
const bodyparser = require('body-parser')
const ClassRoute = require('./routes/class')
app.use(bodyparser.json())
app.use(express.json())
app.get('/' , (req,res)=>{
    res.status(201).json({
        "message":"server is ok"
    })
})
app.use('/' , ClassRoute)

module.exports = app;