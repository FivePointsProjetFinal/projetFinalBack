const mongoose = require('mongoose')

var schema = mongoose.Schema

var CategorieSchema = new schema({
    refCat :{type: String, required :true},
    nameCat : {type: String },
    
})
module.exports = mongoose.model('Categorie',CategorieSchema);