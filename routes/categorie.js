var express = require('express');
var router = express.Router();
const jwtsecure = require ("../jwtsecure/jwt");

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
