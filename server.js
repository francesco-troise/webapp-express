//Import di express
const express = require("express");
const app = express();
const PORT = 3000;

//Import del file di connessione al database
const db = require("./database/database_connection");

//Definizione rotta radice
app.get("/", (req, res) => {
  console.log("Rotta radice");
});

//Running del server
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
