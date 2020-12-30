const mongoose = require("mongoose");
ProduitSchema = new mongoose.Schema({
  nameProduit: { type: String, required: true },
    qteProduit:{ type: Number, required: true },
    prixDachat:{ type: Number, required: true },
    prixVente:{ type: Number, required: true },
    idCat:[{type: schema.Types.ObjectId, ref:'categorie'}],
    idPack:[{type: schema.Types.ObjectId, ref:'pack'}],
    idFournisseur:[{type: schema.Types.ObjectId, ref:'fournisseur'}],
})
  module.exports = mongoose.model("Produit", ProduitSchema);