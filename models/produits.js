const mongoose = require("mongoose");
ProduitSchema = new mongoose.Schema({
    nameProduit: { type: String, required: true },
    qteProduit:{ type: Number, required: true },
    prixDachat:{ type: Number, required: true },
    prixVente:{ type: Number, required: true },
    categorie:[{type: schema.Types.ObjectId, ref:'categorie'}],
    pack:[{type: schema.Types.ObjectId, ref:'pack'}],
    fournisseur:[{type: schema.Types.ObjectId, ref:'fournisseur'}],
})
  module.exports = mongoose.model("Produit", ProduitSchema);