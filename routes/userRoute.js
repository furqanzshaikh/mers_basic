const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user.js')
const router = express.Router()



router.post('/', async (req,res)=>{
 
    try {
    const {name,email,age} = req.body;
    const Adduser = await User.create({
        name:name,
        email:email,
        age:age
    })
    res.status(201).json(Adduser)
    } catch (error) {
        console.log(error)
       res.send(400).json({error:error.message})
    }
    })
    
    
    router.get('/',async(req,res)=>{
        try {
            
            const AllUsers = await User.find()
            res.json(AllUsers)
            console.log(AllUsers)
        } catch (error) {
        res.status(500).json(error)        
        }
    })

    router.get('/:id',async(req,res)=>{
        try {
            const {id} = req.params;
            const OneUser = await User.findById({_id:id})
            res.json(OneUser)
                  
        } catch (error) {
        res.status(500).json(error)        
        }
    })

    router.delete('/:id',async(req,res)=>{
        try {
            const {id} = req.params;
            const DltUser = await User.findByIdAndDelete({_id:id})
            res.json(DltUser)
                  
        } catch (error) {
        res.status(500).json(error)        
        }
    })

    router.patch('/:id',async(req,res)=>{
        const {id} = req.params;
        const {name,email,age}= req.body;
        try {
            const updateuser = await User.findByIdAndUpdate({_id:id},{name:name,email:email,age:age})
            res.json(updateuser)
                  
        } catch (error) {
        res.status(500).json(error)        
        }
    })


   module.exports = router;