const UserForm = require("../../mongodb/models/userForm_model")


exports.addLabourReports = async (req, res) => {
    UserForm.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          labourReport: {
            nameOfAgency:req.body.nameOfAgency,
            typeOfAgency:req.body.typeOfAgency,
            skilled: req.body.skilled,            
            unskilled: req.body.unskilled,
            workDone: req.body.workDone,
          },
        },
      },
      { new: true },
      (err, UserForm) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!UserForm) {
          return res.status(404).send("Site not found");
        }
        res.send(UserForm.labourReport);
      }
    );
  };

  exports.deleteLabourReport = async (req, res) => {
    const { siteId, labourReportId } = req.params;
    UserForm.findOneAndUpdate(
      { _id: siteId },
      {
        $pull: {
          labourReport: {
            _id: labourReportId,
          },
        },
      },
      { new: true },
      (err, UserForm) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!UserForm) {
          return res.status(404).send("Site not found");
        }
          res.send(UserForm.labourReport);
      }
    );
  };
  


  exports.updateLabourReport = async (req, res) => {
    UserForm.findOneAndUpdate(
      { _id: req.params.siteId, "labourReport._id": req.params.labourReportId },
      {
        $set: {
          "labourReport.$.nameOfAgency": req.body.nameOfAgency,
          "labourReport.$.typeOfAgency": req.body.typeOfAgency,
          "labourReport.$.skilled": req.body.skilled,
          "labourReport.$.unskilled": req.body.unskilled,
          "labourReport.$.workDone": req.body.workDone,
        },
      },
      { new: true },
      (err, UserForm) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!UserForm) {
          return res.status(404).send("Labour report not found");
        }
        res.send(UserForm.labourReport);
      }
    );
  };

  exports.getLabourReports = async (req, res) => {
    UserForm.findOne({ _id: req.params.id }, (err, UserForm) => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Error retrieving labour reports", error: err });
      }
      if (!UserForm) {
        return res.status(404).send({ message: "Site not found" });
      }
      res.send({
        message: "Labour reports retrieved successfully",
        data: UserForm.labourReport,
      });
    });
  };
  