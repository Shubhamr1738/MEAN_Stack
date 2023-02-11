const express = require("express")
const router = express.Router();

const site = require("../controller/userform_controller/site_controller");
const labour = require("../controller/userform_controller/labourReport_controller")
const cement = require("../controller/userform_controller/cementReport_controller")
const materialR = require("../controller/userform_controller/materialReport_controller")
const materialC = require("../controller/userform_controller/materialConsumption_controller")
const remarks = require("../controller/userform_controller/remark_controller")
const convert = require("../controller/convert")
//<*****************/---------------- site ---------------------/*************> 

router.post("/:username/addsite",site.addSite);
router.get("/getsite/:id",site.getSiteById);
router.get("/getsitebyuname/:username",site.getSiteByusername);
router.delete("/deletesite/:id",site.deleteSite);
router.put("/updatesite/:id",site.updateSite);
router.get("/getalldata",site.getAllData);


//<*****************/---------------- labourReport ---------------------/*************> 

router.get("/getlabour/:id",labour.getLabourReports);
router.post("/addlabour/:id",labour.addLabourReports);
router.delete("/deletelabour/:siteId/:labourReportId",labour.deleteLabourReport)
router.put("/updatelabour/:siteId/:labourReportId",labour.updateLabourReport);


//<*****************/---------------- cementReport ---------------------/*************> 

router.get("/getcement/:id",cement.getCementReport)
router.post("/addcement/:id",cement.addCementReport)
router.delete("/deletecement/:id",cement.deleteCementReport)


//<*****************/---------------- MaterialReport ---------------------/*************> 
router.get("/getmaterial/:id",materialR.getMaterialReport);
router.post("/addmaterial/:id",materialR.addMaterialReport);
router.delete("/deletematerial/:siteId/:materialReportId",materialR.deleteMaterialReport)
router.put("/updatematerial/:siteId/:materialReportId",materialR.updateMaterialReport);

//<*****************/---------------- MaterialReport ---------------------/*************> 

router.get("/getmaterialC/:id",materialC.getmaterialConsumption);
router.post("/addmaterialC/:id",materialC.addmaterialConsumption);
router.delete("/deletematerialC/:siteId/:materialConsumptionId",materialC.deletematerialConsumption)
router.put("/updatematerialC/:siteId/:materialConsumptionId",materialC.updatematerialConsumption);


//<*****************/---------------- remarks ---------------------/*************> 

router.get("/getremarks/:id",remarks.getRemarks);
router.post("/addremarks/:id",remarks.addRemarks);
router.delete("/deleteremark/:id",remarks.deleteRemarks);
router.put("/updateremarks/:id",remarks.updateRemarks);
router.get("/convert",convert.convert)
module.exports = router;