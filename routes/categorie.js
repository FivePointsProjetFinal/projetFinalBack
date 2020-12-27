const { Router } = require("express");
var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var Categorie = require("../models/categorie");


router.post("/addCategorie", (req, res, next) => {
  const categorie = new Categorie(req.body);
categorie.save().then((createCategorie) => {
    console.log("created catégorie");
    res.status(201).json({
        message: "categorie created",
        categorie: createCategorie,
      })
  }).catch((err) => {
    console.log("hello error");
    console.log(err);
  });

});


router.get("/getAllCategoris", (req, res, next) => {
  jwt.verify(req.token , (err,data)=>{
    if(err){
      res.status(401).json({
        message:"forbiden"
      })
    }
    else{
      Categorie.find().then( getCategorie => {
        res.status(200).json({
            message: "get all catégoris",
            categorie: getCategorie,
          })
          .catch((err) => {
            console.log(err);
          });
      });
          
    }
  })
  
});
router.get("/:id", (req, res, next) => {
  Categorie.findById(req.params.id).then((categorieById) => {
    res.status(200).json({
        message: "get categorie",
        categorie: categorieById,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});


router.put('/UpdateCategorie/:id', async (req,res,next)=>{
  const updateCategorie = await Categorie.findByIdAndUpdate(req.params.id,req.body);
  res.json(updateCategorie)
})

router.delete('/DeleteCatégorie/:id', async(req,res,next)=>{
  const deleteCategorie =   await Categorie.findByIdAndDelete(req.params.id);
  res.json(deleteCategorie);  
  })
  

module.exports = router;
