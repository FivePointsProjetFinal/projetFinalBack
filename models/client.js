const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  nameClient : { type: String, required: true },
  telpClient  : { type: String, required: true },
  faxClient : { type: String, required: true },
  adresseClient : { type: String, select: false },
  emailClient : { type: String },
  modepaimentClient : { type: String },
  villeClient : { type: String, required: true },
  typeClient : { type: String, required: true },
  favoritClient: { type: Boolean, default: false  },
  refClient: { type: String, required: true },
});

module.exports =  mongoose.model("Client", ClientSchema);