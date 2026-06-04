const express=require('express');
const router=express.Router();
const User=require('../models/user');
const auth=require('../middleware/auth');
const role=require('../middleware/role');

router.get('/',auth,role('admin'),(req,res)=>{
  User.getAll((e,users)=>res.render('users',{users}));
});

router.get('/edit/:id',auth,role('admin'),(req,res)=>{
  User.getById(req.params.id,(e,u)=>res.render('edit-user',{u}));
});

router.post('/edit/:id',auth,role('admin'),(req,res)=>{
  const {name,email,role:r}=req.body;
  if(!name||!email||!r) return res.send('Invalid input');
  User.update({id:req.params.id,name,email,role:r},()=>res.redirect('/users'));
});

router.get('/delete/:id',auth,role('admin'),(req,res)=>{
  User.delete(req.params.id,()=>res.redirect('/users'));
});

module.exports=router;
