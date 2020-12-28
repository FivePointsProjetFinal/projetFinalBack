const mongoose = require("mongoose");
PackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    refpack: { type: String, required: true },
    listproduit: [{type: schema.Types.ObjectId, ref:'produit'}],
})
  module.exports = mongoose.model("Categorie", PackSchema);