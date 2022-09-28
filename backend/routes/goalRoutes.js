const express=require('express');
const router=express();
router.get('/',(req,res)=>{
    res.status(200).json({message:'get goal'});
})

router.post('/',(req,res)=>{
    res.status(200).json({message:'set goal'});
})

router.put('/:id',(req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}`});
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`});
})
// http://localhost:5000/api/goals/897
module.exports=router;