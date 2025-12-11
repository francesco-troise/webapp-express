//Import di express
const express = require("express");
const app = express();
const PORT = 3000;

//middleware per parsing automatico del corpo delle richieste HTTP
app.use(express.json());

//Import del router
const moviesRouter = require("./router/movies");

//Definizione del prefisso del router
app.use("/movies", moviesRouter);

//Definizione degli asstes statici
app.use(express.static("pubblic"));

//Definizione rotta radice
app.get("/", (req, res) => {
  console.log("Root route");
});

//Import del file di connessione al database
const db = require("./database/database_connection");

//Running del server
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
