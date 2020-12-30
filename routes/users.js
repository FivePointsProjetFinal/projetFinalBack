
var express = require('express');
var router = express.Router();
const jwtsecure = require ("../jwtsecure/jwt");
const nodemailer = require("nodemailer");

var User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// add User
router.post('/addUser',(req,res,next)=>{
  const user = new User(req.body)
  user.save().then((createdUser)=>{
/***************** */
async function main() {

  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
    service: 'gmail',
    auth: {
      user: 'mahdilallehom@gmail.com',
      pass: '123456789azertymahdi'
    }
  });

  let info = await transporter.sendMail({
    from: ' <mahdilallehom@gmail.com>', // sender address
    to:createdUser.email , // list of receivers
    subject: "Hello : "+createdUser.firstName, // Subject line
    text: "your adress : "+createdUser.email+"your password : "+createdUser.password , // plain text body
 
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
/********* */
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
