var express = require('express');
var router = express.Router();
const jwtsecure = require ("../jwtsecure/jwt");

var Fournisseur = require('../models/fournisseur');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});





module.exports = router;
