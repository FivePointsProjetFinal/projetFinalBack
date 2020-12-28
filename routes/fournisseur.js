var express = require('express');
var router = express.Router();
const jwtsecure = require ("../jwtsecure/jwt");

var Fournisseur = require('../models/fournisseur');
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.send('respond with a resource');
});

// add fournisseur 
router.post('/addFournisseur',(req,res,next)=>{
  const fournisseur  = new Fournisseur({
    nameFournisseur:req.body.nameFournisseur,
    telpFournisseur: req.body.telpFournisseur,
    faxFournisseur:req.body.faxFournisseur,
    adresseFournisseur: req.body.adresseFournisseur,
    emailFournisseur:req.body.emailFournisseur,
    modepaimentFournisseur: req.body.modepaimentFournisseur,
    typeFournisseur: req.body.typeFournisseur,
    favorisFournisseur:false,
    refFournisseur: req.body.refFournisseur
  })
  fournisseur.save().then((createdFournisseur )=>{
    console.log("fournisseur  created");
    res.status(201).json({
      message: "fournisseur  created",
      fournisseur  : createdFournisseur 
    })
  }).catch(err=>{
    console.log(err);
  })
  
})
// update fournisseur
router.put('/update/:id', async (req,res,next)=>{
  await Fournisseur.findByIdAndUpdate(req.params.id,req.body).exec();
  res.json(req.body)
});

// delete fournisseur
router.delete('/delete/:id', async(req,res,next)=>{
  const fournisseur =   await Fournisseur.findByIdAndDelete(req.params.id).exec()
  res.json(fournisseur)
  });

 // get all fournisseur
 router.get('/getFournisseurById/:id',jwtsecure.ensureToken , (req, res) => {
  jwt.verify(req.token,process.env.JWT_KEY,(err,data)=>{
 if (err) {
   res.status(401).json({
     message: "error"
   })
 }
 else{
  Fournisseur.findById(req.params.id).then((u) => {
     res.status(200).json({
       message: "all fournisseur",
       fournisseurs: f
     })
   }).catch(err => {
     console.log(err);
   });
 }
  })
 
 })


module.exports = router;
