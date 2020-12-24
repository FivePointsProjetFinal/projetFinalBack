var express = require('express');
var router = express.Router();
const jwtsecure = require ("../jwtsecure/jwt");

var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// add User
router.post('/addUser',(req,res,next)=>{
  const user = new User(req.body)
  user.save().then((createdUser)=>{
    console.log("user created");
    res.status(201).json({
      message: "user created",
      user : createdUser
    })
  }).catch(err=>{
    console.log(err);
  })
  
})

// update user
router.put('/update/:id', async (req,res,next)=>{
  await User.findByIdAndUpdate(req.params.id,req.body).exec();
  res.json(req.body)
});

// delete user
router.delete('/delete/:id', async(req,res,next)=>{
  const user =   await User.findByIdAndDelete(req.params.id).exec()
  res.json(user)
  });
  // user by id
  router.get('/getUserById/:id',(req,res)=>{
    User.findById(req.params.id).then((u) => {
      res.status(200).json({
             user: u
      })
    }).catch(err => {
      console.log(err);
    });
    })
    // get all user
    router.get('/getUserById/:id',jwtsecure.ensureToken , (req, res) => {
      jwt.verify(req.token,process.env.JWT_KEY,(err,data)=>{
     if (err) {
       res.status(401).json({
         message: "error"
       })
     }
     else{
       User.findById(req.params.id).then((u) => {
         res.status(200).json({
           message: "all users",
           user: u
         })
       }).catch(err => {
         console.log(err);
       });
     }
      })
     
     })
     
  
module.exports = router;
