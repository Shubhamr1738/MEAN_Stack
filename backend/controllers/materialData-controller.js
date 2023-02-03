const UserForm = require("../mongoDB/models/userForm-model.js");

exports.addMaterialReports = async (req, res) => {
  UserForm.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        materialReport: {
          materialReceived: req.body.materialReceived,
          supplierName: req.body.supplierName,
          challanNo: req.body.challanNo,
          quality: req.body.quality,
          time:req.body.time,
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
      res.send(UserForm);
    }
  );
};
exports.deleteMaterialReport = async (req, res) => {
  UserForm.findOneAndUpdate(
    { site: req.params.site },
    {
      $pull: {
        materialReport: {
          _id: req.params.MaterialReportId,
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
      res.send(UserForm);
    }
  );
};

exports.updateMaterialReport = async (req, res) => {
  UserForm.findOneAndUpdate(
    { site: req.params.site, "materialReport._id": req.params.materialReportId },
    {
      $set: {
        "materialReport.$.materialReceived": req.body.materialReceived,
        "materialReport.$.supplierName": req.body.supplierName,
        "materialReport.$.quality": req.body.quality,
        "materialReport.$.challanNo": req.body.challanNo,
        "materialReport.$.time": req.body.time,
      },
    },
    { new: true },
    (err, UserForm) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!UserForm) {
        return res.status(404).send("Material report not found");
      }
      res.send(UserForm);
    }
  );
};

exports.getMaterialReports = async (req, res) => {
  UserForm.findOne({ _id: req.params.id }, (err, UserForm) => {
    if (err) {
      return res
        .status(500)
        .send({ message: "Error retrieving Material reports", error: err });
    }
    if (!UserForm) {
      return res.status(404).send({ message: "Site not found" });
    }
    res.send({
      message: "Material reports retrieved successfully",
      data: UserForm.materialReport,
    });
  });
};
