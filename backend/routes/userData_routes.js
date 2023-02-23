const express = require("express")
const router = express.Router();

const userdata = require("../controller/userdata_controller/userData_controller.js")
const sitedata = require("../controller/userdata_controller/siteData_controller.js");
const companyName = require("../controller/userdata_controller/companyData_controller")
const { route } = require("./userForm_routes.js");


//<*****************/---------------- userData ---------------------/*************> 

router.get("/getuser",userdata.getAllUsers);
router.post("/login",userdata.loginUserData);
router.post("/signup",userdata.signupUserData);
router.delete("/deleteuser/:id",userdata.deleteUserData);
router.put("/updateuser/:id",userdata.updateUserData);
router.patch("/updatepassword/:id",userdata.updatePassword);
router.get("/finduser/:name",userdata.findUserByUsername);
router.get("/getusersbyrole/:role/:companyName",userdata.getusersbyrole);

//<*****************/---------------- siteData ---------------------/*************> 

router.post("/:userid/addsitedata",sitedata.addsiteData);
router.delete("/:userid/deletesitedata/:sitedataid",sitedata.deletesiteData);
router.put("/:userid/updatesitedata/:sitedataid",sitedata.updatesiteData);
router.get("/getsitedata/:userid",sitedata.getsiteData);

//<*****************/---------------- companyName ---------------------/*************> 
router.post("/:userid/addcompanyname",companyName.addCompanyName);
router.get("/:userid/getcompanyname",companyName.getCompanyName);
router.delete("/:userid/deletecompanyname",companyName.deleteCompanyName);

module.exports = router;