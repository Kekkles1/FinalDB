
const express = require("express");
const adminsController = require("../controllers/adminsController.js");
const bodyParser = require('body-parser');

const router = express.Router();

router.get("/", adminsController.getAllAdmins);
router.post("/AddNewAdmin",adminsController.AddNewAdmin);
router.post("/AddNewShow",adminsController.AddNewShow);
router.delete("/DeleteAdminID",adminsController.DeleteAdminID);

module.exports = router;
