
const express = require('express')
var router = express.Router();
var Client = require("../models/client");
const nodemailer = require("nodemailer");
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

router.get("/getAllClient", (req, res, next) => {
  Client.find().then((getClient) => {
  res.status(200).json({
      message: "get all client",
      client: getClient,
    })
    .catch((err) => {
      console.log(err);
    });
});
});
router.get("/getClient/:id", (req, res, next) => {
  Client.findById(req.params.id).then((clientById) => {
    res.status(200).json({
        message: "get client",
        client: clientById,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/getFavoritClient/:id", async (req,res,next)=>{
  const client = await Client.findById(req.params.id);
  if (client.favoritClient===true){
    res.send(client);
  }else{
    return res.status(400).send({ message: "it does not belong to the favorites list" });
  }
})

router.put('/updateClient/:id', async (req,res,next)=>{
  const updateClient = await Client.findByIdAndUpdate(req.params.id,req.body);
  res.json(updateClient)
})

router.delete('/deleteClient/:id', async(req,res,next)=>{
  const deleteClient =   await Client.findByIdAndDelete(req.params.id);
  res.json(deleteClient);  
  })
  

router.post('/:id',async (req,res,next)=>{
  const user = await User.findById(req.params.id)
  let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
               client: process.env.EMAIL || 'your email', 
               pass: process.env.PASSWORD || 'your password' 
      }
    });
   
    let mailOptions = {
      from: 'emna.hamdi.adressemail@gmail.com',
      to: user.email,
      port: 587, 
      secure: false,
      text: 'emna hamdi',
      html: "<h1>HTML version </h1>"
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
          res.json(err);
          console.log(err);
      }
      return res.json("Message sent")
    });
})



module.exports = router;

