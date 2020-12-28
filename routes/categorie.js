const { Router } = require("express");
var express = require("express");
var router = express.Router();
<<<<<<< HEAD
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
  
=======
const jwtsecure = require ("../jwtsecure/jwt");
>>>>>>> ac23801d3962947dccd681d8436f489262f56571

var categorie = require('../models/categorie');

/* GET categorie listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
// add categorie
router.post('/addcategorie',(req,res,next)=>{
    const categorie = new Categorie(req.body)
    categorie.save().then((createdCategorie)=>{
        console.log("categorie created");
    res.status(201).json({
      message: "categorie created",
      categorie : createdCategorie
    })
  }).catch(err=>{
    console.log(err);
  })
  
})
// update categorie
router.put('/update/:id', async (req,res,next)=>{
    await categorie.findByIdAndUpdate(req.params.id,req.body).exec();
    res.json(req.body)
  });

  // delete categorie
router.delete('/delete/:id', async(req,res,next)=>{
    const categorie =   await Categorie.findByIdAndDelete(req.params.id).exec()
    res.json(categorie)
    });

    // get all user
    router.get('/getCategorieById/:id',jwtsecure.ensureToken , (req, res) => {
        jwt.verify(req.token,process.env.JWT_KEY,(err,data)=>{
       if (err) {
         res.status(401).json({
           message: "error"
         })
       }
       else{
        categorie.findById(req.params.id).then((u) => {
           res.status(200).json({
             message: "all categorie",
             categorie: u
           })
         }).catch(err => {
           console.log(err);
         });
       }
        })
       
       })
module.exports = router;
