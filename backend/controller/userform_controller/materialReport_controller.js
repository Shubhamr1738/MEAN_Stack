const UserForm = require("../../mongodb/models/userForm_model")


exports.addMaterialReport = async (req, res) => {
    UserForm.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
            materialReport: {
                materialReceived:req.body.materialReceived,
                supplierName:req.body.supplierName,
                quality: req.body.quality,            
                billNo: req.body.billNo,
                amount: req.body.amount,
                paid: req.body.paid,            
                time: req.body.time,
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
        res.send(UserForm.materialReport);
      }
    );
  };

  exports.deleteMaterialReport = async (req, res) => {
    const { siteId, materialReportId } = req.params;
    UserForm.findOneAndUpdate(
      { _id: siteId },
      {
        $pull: {
            materialReport: {
            _id: materialReportId,
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
        res.send(UserForm.materialReport);
      }
    );
  };
  


  exports.updateMaterialReport = async (req, res) => {
    UserForm.findOneAndUpdate(
      { _id: req.params.siteId, "materialReport._id": req.params.materialReportId },
      {
        $set: {
          "materialReport.$.materialReceived": req.body.materialReceived,
          "materialReport.$.supplierName": req.body.supplierName,
          "materialReport.$.quality": req.body.quality,
          "materialReport.$.billNo": req.body.billNo,
          "materialReport.$.amount": req.body.amount,
          "materialReport.$.paid": req.body.paid,
          "materialReport.$.time": req.body.time,
        },
      },
      { new: true },
      (err, UserForm) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!UserForm) {
          return res.status(404).send("material report not found");
        }
        res.send(UserForm.materialReport);
      }
    );
  };

  exports.getMaterialReport = async (req, res) => {
    UserForm.findOne({ _id: req.params.id }, (err, UserForm) => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Error retrieving material reports", error: err });
      }
      if (!UserForm) {
        return res.status(404).send({ message: "Site not found" });
      }
      res.send({
        message: "material reports retrieved successfully",
        data: UserForm.materialReport,
      });
    });
  };
  