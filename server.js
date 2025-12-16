//Import di express
const express = require("express");
const app = express();
const PORT = 3000;

//Import del middlewereCORS per accesso al database
const corsMiddleware = require("./middleware/generic_middelware");

//middleware per accesso al database
app.use(corsMiddleware);

//middleware per parsing automatico del corpo delle richieste HTTP
app.use(express.json());

//Import del router
const moviesRouter = require("./router/movies");

//Definizione del prefisso del router
app.use("/movies", moviesRouter);

//Definizione degli asstes statici
app.use(express.static("public"));

//Definizione rotta radice
app.get("/", (req, res) => {
  console.log("Root route");
});

//Import del file di connessione al database
const db = require("./database/database_connection");

// Middleware per rotte inesistenti(404)
app.use((req, res, next) => {
  //Invio dell'errore
  res.status(404).json({
    status: "error",
    message: `La rotta non esiste`,
  });
});

// Middleware per gestione errori
app.use((err, req, res, next) => {
  //log dell'errore
  console.error(err.stack);
  //Invio dell'errore
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Errore interno del server",
  });
});

//Running del server
app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
