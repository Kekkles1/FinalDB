
const express = require("express");
const adminsController = require("../controllers/adminsController.js");
const bodyParser = require('body-parser');

const router = express.Router();

router.get("/", adminsController.getAllAdmins);
router.post("/AddNewAdmin",adminsController.AddNewAdmin);

module.exports = router;
