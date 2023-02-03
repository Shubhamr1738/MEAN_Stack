const express = require("express")
const router = express.Router();

const userData = require("../controllers/userData-controller.js");



router.post("/signup", userData.signupUserData);
router.post("/login", userData.loginUserData);
router.get("/getalluser", userData.getAllUsers);
router.post("/addsite", userData.addSite);
router.post("/updatesite", userData.updateSite);
module.exports = router;