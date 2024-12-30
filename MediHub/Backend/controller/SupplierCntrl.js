const asyncHandler = require('express-async-handler');
const Supplier = require('../models/Suppliermodel');

// Créer un fournisseur ----------------------------------------------
const createSupplier = asyncHandler(async (req, res) => {
    // Obtenir l'email à partir de req.body
    const email = req.body.email;

    // Vérifier si le fournisseur existe déjà avec cet email
    const findSupplier = await Supplier.findOne({ email: email });

    if (!findSupplier) {
        // Si le fournisseur n'est pas trouvé, créer un nouveau fournisseur
        const newSupplier = await Supplier.create({
            ...req.body,
            statut: 'en_attente', // Statut par défaut pour un nouveau fournisseur
        });
        // Renvoyer une réponse avec le message personnalisé
        res.status(201).json({
            message: 'Inscription réussie. Un administrateur doit approuver votre compte.',
            supplier: newSupplier
        });
    } else {
        // Si le fournisseur existe déjà, lancer une erreur : "Supplier Already Exists"
        res.status(400);
        throw new Error("Supplier Already Exists");
    }
});

module.exports = { createSupplier };
