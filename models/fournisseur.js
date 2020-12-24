const mongoose = require('mongoose')

var schema = mongoose.Schema

var fournisseurSchema = new schema({
    firstName :{type: String, required :true},
    telp: {type: String ,required : true},
    fax : {type: String ,required :true},
    adresse :{type: String, required :true},
    email : {type: String ,required : true},
    modepaiment : {type: String ,required : true},
    type : {type: String ,required : true},
    favoris : {type: String ,required : true},
    roleuser: {type:String },
    
    
})
module.exports = mongoose.model('Fournisseur',fournisseurSchema);