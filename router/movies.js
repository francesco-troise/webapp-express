const express = require("express");
const router = express.Router();
//Import di "multer" per gestire acuisizione file
const multer = require("multer");
//upload: istanza di multer, dest: cartella di destinazione dei file caricati
//const upload = multer({ dest: "uploads/" });

//Import del controller
const moviesController = require("../controller/moviesController");

//Index
router.get("/", moviesController.index);

//Show
router.get("/:id", moviesController.show);

/*
    "diskStorage" permette di avere controllo diretto su dove salvare i file ricevuto, e sul nome da seegnargli
    in questo caso si utilizza un suffisso unico, ed il nome originale del file(così da conservane il formato)
*/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/movies_cover");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      uniqueSuffix + "_" + file.originalname.toLowerCase().replaceAll(" ", "_")
    );
  },
});

//Utilizzo di storage nella creazione di "upload"
const upload = multer({ storage: storage });

/*
    StoreMovie
    upload.single: metodo di upload, comunica da quale campo del form aspettarsi il file
*/
router.post("/", upload.single("image"), moviesController.store);

//Modify
router.patch("/:id", moviesController.modify);

//Update
router.put("/:id", moviesController.update);

//Destroy
router.delete("/:id", moviesController.destroy);

module.exports = router;
