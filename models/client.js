const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  mot_de_pass: { type: String, select: false },
  email: { type: String },
  type_client: { type: String },
  adresse: { type: String, required: true },
  mode_de_payement: { type: String, required: true },
  favoritClient: { type: Boolean, default: false  },
  refClient: { type: String, required: true },
});

module.exports =  mongoose.model("Client", ClientSchema);