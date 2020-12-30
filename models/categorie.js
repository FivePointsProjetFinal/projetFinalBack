const mongoose = require("mongoose");
CategorieSchema = new mongoose.Schema({
  refCat: { type: String, required: true },
  nameCat: { type: String, required: true },
})   
  module.exports = mongoose.model("Categorie", CategorieSchema);
