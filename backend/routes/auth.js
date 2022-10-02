const express=require('express');
const router=express();

// const {setgoal,updategoal,deletegoal,getgoal}=require('../controller/goalsController');

// router.route('/').get(getgoal).post(setgoal);
// router.get('/',getgoal);

// router.post('/',setgoal);

// router.route('/:id').put(updategoal).delete(deletegoal);

// router.put('/:id',updategoal)

// router.delete('/:id',deletegoal);
// http://localhost:5000/api/goals/897

require('../db/conn');
const User=require("../model/useSchema");

router.get('/',(req,res)=>{
    res.send('get request');
})

router.post('/register',async(req,res)=>{
    const{name,email,phone,work,password,cpassword}=req.body;
    if(! name || ! email|| ! work|| ! phone|| ! password || !cpassword){
        return res.status(422).json({error:"please filled the property"});
    }

  try{
    const userexist=await User.findOne({email:email});
    if(userexist){
        return res.status(422).json({message:"email already existed"})
    }
    const user=new User({name,email,work,phone,password,cpassword});
    const userRegister=await user.save();
    if(userRegister){
        res.status(201).json({message:"user register successfully"});
    }
    
  } catch(err){
    console.log(err);
  }
    // res.json({message:req.body});
});
module.exports=router;