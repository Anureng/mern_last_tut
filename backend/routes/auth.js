const express=require('express');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const user = require('../model/useSchema');
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
    } else if (password!= password){
      return res.status(422).json({message:"password are not match"})
    }
    else{
      const user=new User({name,email,work,phone,password,cpassword});
      await user.save();
      
          res.status(201).json({message:"user register successfully"});
    }
  
  
    
  } catch(err){
    console.log(err);
  }
    // res.json({message:req.body});
  
});
  //sign up page
  router.post('/signin',async (req,res)=>{
    try{
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(400).json({message:"plz filled the data"})
    }
    const userlogin=await user.findOne({email:email});
    // console.log(userlogin);
    // const ismatch=await bcrypt.compare(password,userlogin.password);

    // if(!userlogin){
    //   res.status(400).json({message:"server error"})
    // }
    // else{
    //   res.status(200).json({message:"user sign successfully"})
    // }
    if(userlogin){
      const ismatch=await bcrypt.compare(password,userlogin.password);
      const token=await userlogin.generateAuthToken();
      res.cookie('jwttoken',token,{
        expires:new Date(Date.now()+25892000000),
        httpOnly:true
      })
    if(!ismatch){
      res.status(400).json({message:"invalid credentails pass"})
    }
    else{
      res.status(200).json({message:"user signin succesfully"})
    }
  }
  else{
    res.status(400).json({message:"invalid credentails"})
  }
    } catch(err){
        console.log(err);
    }
  });

module.exports=router;