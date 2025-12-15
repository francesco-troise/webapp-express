const express = require("express");
const router = express.Router();
//Import di "multer" per gestire acuisizione file
const multer = require("multer");
//upload: istanza di multer, dest: cartella di destinazione dei file caricati
const upload = multer({ dest: "uploads/" });
//Import del controller
const moviesController = require("../controller/moviesController");

//Index
router.get("/", moviesController.index);

//Show
router.get("/:id", moviesController.show);

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
