module.exports = (role)=>(req,res,next)=>{
  if(req.session.user.role!==role) return res.send('Access denied');
  next();
};
