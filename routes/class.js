const Classes = require('../models/classModel')
const router = require('express').Router()
let id = 1


router.get("/v1/myClass" , async (req,res)=>{
    try{
        const classes = await Classes.find()
        res.status(201).json({
            "classes":classes
        })

    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})
router.get("/v1/myClass/:id" , async (req , res)=>{
    try{
        const id = req.params.id

        const data = await Classes.findOne({id:id})
        if(data){
            res.status(201).json({
                "class":data
            })
        }else{
            res.status(400).json({
                "message":"Class Not Found"
            })
        }

    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})
router.delete("/v1/myClass/:id" , async (req , res)=>{
    try{
        const id = req.params.id

        const data = await Classes.findOne({id:id})

        
        if(data){
            const deldata = await Classes.findByIdAndDelete(data._id)
            res.status(201).json({
                "Message":"Class deleteed"
            })
        }else{
            res.status(400).json({
                "message":"Class Not Found"
            })
        }

    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})

router.post("/v1/myClass" , async (req,res)=>{
    try{
   
         const clas = await Classes.create({
            id:++id,
            class: req.body.class,
            studentsCounts:req.body.studentsCounts
         })
       
        res.status(201).json({
            "id":id
        })

    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})
router.post("/v1/myClass/:id/students" , async (req,res)=>{
    try{
   const id = req.params.id
   const Exclass = await Classes.findOne({id:id})
  const data =  Exclass.class.push(req.body)
         const clas = await Classes.findByIdAndUpdate(Exclass._id ,data)
       
        res.status(201).json({
            "id":id
        })

    }catch(e){
        res.status(400).json({
            message:e.message
        })
    }
})






















module.exports = router