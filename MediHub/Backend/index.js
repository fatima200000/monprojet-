const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require('cors');
const dbconnect = require("./config/dbconnect");

const app = express();
const PORT = process.env.PORT || 5000;
const authRouter = require("./routes/authRoute");
const supplierRouter = require("./routes/supplierRoute")


// Connexion à la base de données
dbconnect();

// Middleware pour parser le corps des requêtes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000', // autorise uniquement ce domaine
  methods: 'GET,POST,PUT,DELETE',  // autorise uniquement ces méthodes
  allowedHeaders: 'Content-Type,Authorization',  // autorise ces en-têtes
}));
app.use(express.json());

// Définir les routes API avant la route de test
app.use("/api/user", authRouter);
app.use("/api/supplier", supplierRouter);


// Route de test
app.use("/", (req, res) => {
  res.json({ message: 'hello' });});

app.post('/api/auth/register', (req, res) => {
    console.log('Received request:', req.body);
    // Traiter la demande
});
// Lancement du serveur
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
