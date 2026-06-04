const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth');

router.get('/',auth,(req,res)=>{
  res.render('profile',{user:req.session.user});
});

module.exports=router;
