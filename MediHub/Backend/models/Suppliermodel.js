const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require("bcrypt");


// Declare the Schema of the Mongo model
const SupplierSchema = new mongoose.Schema({
    nomEntreprise: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    numeroTelephone: { type: String, required: true },
    adresse: { type: String, required: true },
    motDePasse: { type: String, required: true },
    statut: { type: String, enum: ['en_attente', 'accepté', 'rejeté'], default: 'en_attente' },
});


//Export the model
module.exports = mongoose.model('Supplier', SupplierSchema);