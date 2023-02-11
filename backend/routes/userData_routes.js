const express = require("express")
const router = express.Router();

const userdata = require("../controller/userData_controller.js")


router.get("/getuser",userdata.getAllUsers);
router.post("/login",userdata.loginUserData);
router.post("/signup",userdata.signupUserData);
router.delete("/deleteuser/:id",userdata.deleteUserData);
router.put("/updateuser/:id",userdata.updateUserData);
router.patch("/updatepassword/:id",userdata.updatePassword);
router.get("/finduser/:name",userdata.findUserByUsername);

module.exports = router;