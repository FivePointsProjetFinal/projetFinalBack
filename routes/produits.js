const { Router } = require("express");
var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Produit = require("../models/produits");
var Fournisseur = require("../models/fournisseur");
var Categorie = require("../models/categorie");
var Pack = require("../models/pack");
// create product //
router.post(
    "/create/:id",
    async (req, res) => {
      const Fournisseur = await Fournisseur.findById(req.params.id);
      const Categorie = await Categorie.findById(req.params.id);
      const Pack = await Pack.findById(req.params.id);
  
      if (!Fournisseur) return res.status(400).send({ message: "Fournisseur does not exist" });
      if (!Categorie) return res.status(400).send({ message: "Categorie does not exist"});
      if (!Pack) return res.status(400).send({ message: "Pack does not exist"});

      const newProduct = req.body;
      newProduct.Fournisseur = req.params.id;
      newProduct.Categorie = req.params.id;
      newProduct.Pack = req.params.id
      const produit = new Produit(newProduct);
      await produit.save();
      res.send(produit);
    }
  );
  
  router.get("/getAllProduct", (req, res, next) => {
    Produit.find().then((getProduct) => {
    res.status(200).json({
        message: "get all product",
        product: getProduct,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.get("/getProduct/:id", (req, res, next) => {
    Produit.findById(req.params.id).then((ProductById) => {
    res.status(200).json({
        message: "get todo",
        product: ProductById,
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
router.get( "/:idCategotie",async (req, res) => {
      const requeteProduit = Produit.find({ categorie: req.params.idCategorie });
        const produit = await requeteProduit;
        res.send({ produits: produit});

    }
  );
  router.get( "/:idCategotie",async (req, res) => {
    const requeteProduit = Produit.find({ categorie: req.params.idCat }).populate('categorie');
      const produit = await requeteProduit;
      res.send({ produits: produit});

  }
);
  router.get( "/:idPack",async (req, res) => {
    const requeteProduit = Produit.find({ pack: req.params.idPack});
      const produit = await requeteProduit;
      res.send({ produits: produit});

  }
);
router.get( "/:idFournisseur",async (req, res) => {
    const requeteProduit = Produit.find({ fournisseur: req.params.idFournisseur});
      const produit = await requeteProduit;
      res.send({ produits: produit});

  }
);
router.put('/update/:id', async (req,res,next)=>{
    const updateProduct = await Produit.findByIdAndUpdate(req.params.id,req.body);
    res.json(updateProduct)
  })
  
  router.delete('/delete/:id', async(req,res,next)=>{
    const deleteProduct =   await Produit.findByIdAndDelete(req.params.id);
    res.json(deleteProduct);  
    })
module.exports = router;
