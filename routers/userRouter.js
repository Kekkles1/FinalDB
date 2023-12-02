
const express = require("express");
const usersController = require("../controllers/usersController.js");
const bodyParser = require('body-parser');

const router = express.Router();

router.get("/", usersController.getAllUsers);
router.post("/AddNewUser",usersController.AddNewUser);
router.get("/GetAllTvShows",usersController.getAllTvShows);
router.post("/DeleteUserID",usersController.DeleteUserID);

module.exports = router;
