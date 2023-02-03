const exceljs = require('exceljs');
const fs = require('fs');
const UserForm = require('../mongoDB/models/userForm-model');
const mongoose = require('../mongoDB/connection/db');
const filePath = './UserForm.xlsx';
const workbook = new exceljs.Workbook();
const worksheet = workbook.addWorksheet('UserForm');

worksheet.columns = [
    { header: 'Site', key: 'site', width: 10 },
    { header: 'Date', key: 'date', width: 20 },
    { header: 'Labour Report Name', key: 'labourReportName', width: 25 },
    { header: 'Labour Report Skilled', key: 'labourReportSkilled', width: 25 },
    { header: 'Labour Report Unskilled', key: 'labourReportUnskilled', width: 25 },
    { header: 'Labour Report Work Done', key: 'labourReportWorkDone', width: 25 },
    { header: 'Cement Report Opening Balance', key: 'cementReportOpeningBalance', width: 25 },
    { header: 'Cement Report Report', key: 'cementReportReport', width: 25 },
    { header: 'Cement Report Total Stock', key: 'cementReportTotalStock', width: 25 },
    { header: 'Cement Report Consumption Details', key: 'cementReportConsumptionDetails', width: 25 },
    { header: 'Cement Report Closing Balance', key: 'cementReportClosingBalance', width: 25 },
    { header: 'Material Report Material Received', key: 'materialReportMaterialReceived', width: 25 },
    { header: 'Material Report Supplier Name', key: 'materialReportSupplierName', width: 25 },
    { header: 'Material Report Quality', key: 'materialReportQuality', width: 25 },
    { header: 'Material Report Challan No', key: 'materialReportChallanNo', width: 25 },
    { header: 'Material Report Time', key: 'materialReportTime', width: 25 },
    { header: 'Remarks', key: 'remarks', width: 20 }
    ];




fs.unlink(filePath, (err) => {
if (err) {
console.log('File does not exist, creating a new file');
} else {
console.log('File deleted');
}
});
/*
exports.convert = (req, res) => {
    console.log("working fine");
UserForm.find()
.then(documents => {
documents.forEach(document => {
  let labourReport = document.labourReport[0];
  let cementReport = document.cementReports;
  let materialReport = document.materialReport;

  worksheet.addRow({
    site: document.site,
    date: document.date,
    labourReportName: labourReport ? labourReport.name : null,
    labourReportSkilled: labourReport ? labourReport.skilled : null,
    labourReportUnskilled: labourReport ? labourReport.unskilled : null,
    labourReportWorkDone: labourReport ? labourReport.workDone : null,
    cementReportOpeningBalance: cementReport ? cementReport.openingBalance : null,
    cementReportReport: cementReport ? cementReport.cementReport : null,
    cementReportTotalStock:cementReport? cementReport.totalStock:null,
    cementReportConsumptionDetails:cementReport? cementReport.consumptionDetails:null,
    cementReportClosingBalance :cementReport? cementReport.closingBalance:null,
    materialReportMaterialReceived:materialReport? materialReport.materialReceived:null,
    materialReportSupplierName:materialReport?materialReport.supplierName:null,
    materialReportQuality:materialReport?materialReport.quality:null,
    materialReportChallanNo:materialReport?materialReport.challanNo:null,
    materialReportTime:materialReport?materialReport.time:null,
    remarks: document.remarks,
  });
  workbook.xlsx.writeFile('./UserForm.xlsx').then(() => {
    console.log('File has been written');
})})})};
*/
exports.convert = (req, res) => {
    console.log("working fine");
UserForm.find()
.then(documents => {
documents.forEach(document => {
    worksheet.addRow({site: document.site,
        date: document.date,});
document.labourReport.forEach(labourReport => {
worksheet.addRow({
labourReportName: labourReport.name,
labourReportSkilled: labourReport.skilled,
labourReportUnskilled: labourReport.unskilled,
labourReportWorkDone: labourReport.workDone,
cementReportOpeningBalance: document.cementReports.openingBalance,
cementReportReport: document.cementReports.cementReport,
cementReportTotalStock: document.cementReports.totalStock,
cementReportConsumptionDetails: document.cementReports.consumptionDetails,
cementReportClosingBalance: document.cementReports.closingBalance,
materialReportMaterialReceived: document.materialReport.materialReceived,
materialReportSupplierName: document.materialReport.supplierName,
materialReportQuality: document.materialReport.quality,
materialReportQuality: document.materialReport.challanNo,
materialReportQuality: document.materialReport.quality,
materialReportChallanNo: document.materialReport.challanNo,
materialReportTime: document.materialReport.time,
remarks: document.remarks
});
});
});

workbook.xlsx.writeFile('./UserForm1.xlsx').then(() => {
console.log('File has been written');
});
})
.catch(error => {
console.log(error);
});
};