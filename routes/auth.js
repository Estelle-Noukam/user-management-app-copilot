const express=require('express');
const bcrypt=require('bcryptjs');
const router=express.Router();
const User=require('../models/user');

router.get('/',(req,res)=>res.redirect('/login'));

router.get('/login',(req,res)=>res.render('login'));

router.post('/login',(req,res)=>{
  const{email,password}=req.body;
  if(!email||!password) return res.send('Invalid input');

  User.findByEmail(email,(e,u)=>{
    if(!u) return res.send('User not found');
    if(!bcrypt.compareSync(password,u.password)) return res.send('Wrong password');
    req.session.user=u;
    res.redirect('/dashboard');
  });
});

router.get('/register',(req,res)=>res.render('register'));

router.post('/register',(req,res)=>{
  const{name,email,password}=req.body;
  if(!name||!email||!password) return res.send('Invalid input');

  const hash=bcrypt.hashSync(password,10);
  User.create({name,email,password:hash,role:'user'},()=>res.redirect('/login'));
});

router.get('/dashboard',(req,res)=>{
  if(!req.session.user) return res.redirect('/login');
  res.render('dashboard',{user:req.session.user});
});

router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/login');
});

module.exports=router;
