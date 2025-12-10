//Import di express
const express = require("express");
const app = express();
const PORT = 3000;

//Definizione degli asstes statici
app.use(express.static("pubblic"));

//Definizione rotta radice
app.get("/", (req, res) => {
  console.log("Rotta radice");
});

//Running del server
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});

//Import del file di connessione al database
const db = require("./database/database_connection");
