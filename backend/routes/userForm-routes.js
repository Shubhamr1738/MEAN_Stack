const express = require("express")
const router = express.Router();

const labourDataControl = require('../controllers/labourData-controller.js');
const cementDataControl =require('../controllers/cementData-controller');
const convert =require('../controllers/convert')
const materialDataControl = require('../controllers/materialData-controller');


router.post ('/addlabour/:id', labourDataControl.addLabourReports);
router.delete ('/dlabour/:labourReportId', labourDataControl.deleteLabour);
router.put ('/ulabopur/:labourReportId', labourDataControl.updateLabour);
router.get("/glabour/:id", labourDataControl.getLabourReports);

router.post ('/addcement/:id', cementDataControl.updateCementReport);
router.delete ('/deletecement/:id', cementDataControl.deleteCementReport);
router.get ('/getcement/:id', cementDataControl.getCementReport);

router.post ('/addlabour/:id', materialDataControl.addMaterialReports);
router.delete ('/delete/:site/:labourReportId', materialDataControl.deleteMaterialReport);
router.put ('/update/:site/:labourReportId', materialDataControl.updateMaterialReport);
router.get("/getlabour/:id", materialDataControl.getMaterialReports);

router.get('/convert',convert.convert)
module.exports = router;