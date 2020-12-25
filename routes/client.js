
const express = require('express')
var router = express.Router();
var Client = require("../models/client");
const nodemailer = require("nodemailer");
// const User = require('../models/client')
var fs = require("fs");
var ejs = require("ejs");
require('dotenv').config();
const log = console.log;

router.post("/addClient", (req, res, next) => {
  const client = new Client(req.body);
  client.save().then((createClient) => {
    console.log("created client");
    res.status(201).json({
        message: "client created",
        client: createClient,
      })
  }).catch((err) => {
    console.log(err);
  });
});

router.get("/getClient/:id", (req, res, next) => {
  Client.findById(req.params.id).then((clientById) => {
    res.status(200).json({
        message: "get client",
        user: clientById,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

// router.post('/addFavoritClient', async (req,res,next)=>{
  
//   const FavoritClient = await Client.findOne(req.body.favoritClient);
//   if (FavoritClient)
//     return res.status(400).send({ message: "it does not belong to the favorites list" });
//     await client.save();
//     res.send(client);
  
// })
router.put('/updateClient/:id', async (req,res,next)=>{
  const updateClient = await User.findByIdAndUpdate(req.params.id,req.body);
  res.json(updateClient)
})

router.delete('/deleteClient/:id', async(req,res,next)=>{
  const deleteClient =   await User.findByIdAndDelete(req.params.id);
  res.json(deleteClient);  
  })
  
exports.sendEmail= (clientId)=>{
  return async  (req,res)=>{
    let client = await User.findById(clientId)
  // Step 1
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        client: process.env.EMAIL || 'your email', 
        pass: process.env.PASSWORD || 'your password' 
    }
  });
  // Step 2
  let mailOptions = {
    from: 'emna@gmail.com',
    to: user.email, 
    subject: 'Nodemailer - Test',
    text: 'it work!!'
  };
  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        res.json(err);
        console.log(err);
    }
    console.log("email sent");
    return res.json("Email sent!")
  });
} 
};





module.exports = router;

