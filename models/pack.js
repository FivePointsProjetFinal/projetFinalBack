const mongoose = require("mongoose");
PackSchema = new mongoose.Schema({
  refPack: { type: String, required: true },
  namePack: { type: String, required: true },
  listProduit: [{type: schema.Types.ObjectId, ref:'produit'}],
})
  module.exports = mongoose.model("Categorie", PackSchema);