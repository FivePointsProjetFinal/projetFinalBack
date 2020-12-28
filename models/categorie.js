const mongoose = require("mongoose");
CategorieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    refcategorie: { type: String, required: true },
})   
  module.exports = mongoose.model("Categorie", CategorieSchema);
