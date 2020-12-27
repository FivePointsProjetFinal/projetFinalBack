var express = require("express");
const app = require("../app");
var router = express.Router();
const mongoose = require("mongoose");
var Pack = require("../models/pack");
var Produit =require('../models/produits')

router.post("/addPack", (req, res, next) => {
  const pack = new Pack(req.body);
  pack.save().then((createpack) => {
    console.log("created pack");
    res.status(201).json({
        message: "pack created",
        pack: createpack,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});


router.get("/getAllPack", (req, res, next) => {
    Pack.find().then((getPack) => {
    res.status(200).json({
        message: "get all pack",
        pack: getPack,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
router.get("/get/:id", (req, res, next) => {
    Pack.findById(req.params.id).then((packById) => {
    res.status(200).json({
        message: "get pack",
        pack: packById,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.put('/update/:id', async (req,res,next)=>{
  const updatePACK = await Pack.findByIdAndUpdate(req.params.id,req.body);
  res.json(updatePACK)
})

router.delete('/delete/:id', async(req,res,next)=>{
  const deletePACK =   await Pack.findByIdAndDelete(req.params.id);
  res.json(deletePACK);  
  })

module.exports = router;
