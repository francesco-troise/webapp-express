const express = require("express");
const router = express.Router();

//Import del controller
const moviesController = require("../controller/moviesController");

//Index
router.get("/", moviesController.index);

//Show
router.get("/:id", moviesController.show);

//Store
router.post("/", moviesController.store);

//Modify
router.patch("/:id", moviesController.modify);

//Update
router.put("/:id", moviesController.update);

//Destroy
router.delete("/:id", moviesController.destroy);

module.exports = router;
