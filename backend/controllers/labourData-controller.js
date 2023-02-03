const UserForm = require("../mongoDB/models/userForm-model.js");
const mongoose =require('mongoose');

exports.addLabourReports = async (req, res) => {
  UserForm.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        labourReport: {
          name: req.body.name,
          skilled: req.body.skilled,
          workDone: req.body.workDone,
          unskilled: req.body.unskilled,
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
/*
exports.deleteLabourReport = async (req, res) => {
  UserForm.findOneAndUpdate(
    { site: req.params.site },
    {
      $pull: {
        labourReport: {
          _id: req.params.labourReportId,
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
*/


exports.deleteLabour = async (req, res) => {
  try {
      const labourReportId = req.params.labourReportId;

      const userForms = await UserForm.find({ "labourReport._id": labourReportId });
      
      if (!userForms.length) {
        return res.status(404).json({
          success: false,
          message: 'Labour report not found'
        });
      }
      
      for (let i = 0; i < userForms.length; i++) {
          const userForm = userForms[i];
          const labourReportIndex = userForm.labourReport.findIndex(labourReport => labourReport._id.toString() === labourReportId);

          userForm.labourReport.splice(labourReportIndex, 1);
          await userForm.save();
      }

      res.status(200).json({
          success: true,
          message: 'Labour report deleted successfully'
      });
  } catch (err) {
      res.status(500).json({
          success: false,
          message: 'Failed to delete labour report',
          error: err
      });
  }
};



/*
exports.updateLabourReport = async (req, res) => {
  UserForm.findOneAndUpdate(
    { site: req.params.site, "labourReport._id": req.params.labourReportId },
    {
      $set: {
        "labourReport.$.name": req.body.name,
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
      res.send(UserForm);
    }
  );
};
*/
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


exports.updateLabour = async (req, res) => {
  try {
    const labourReportId = req.params.labourReportId;
    const updates = req.body;

    const userForms = await UserForm.find({ "labourReport._id": labourReportId });
    
    if (!userForms.length) {
        return res.status(404).json({
            success: false,
            message: 'Labour report not found'
        });
    }

    for (let i = 0; i < userForms.length; i++) {
        const userForm = userForms[i];
        const labourReportIndex = userForm.labourReport.findIndex(labourReport => labourReport._id.toString() === labourReportId);

        userForm.labourReport[labourReportIndex] = updates;
        await userForm.save();
    }

    res.status(200).json({
        success: true,
        message: 'Labour report updated successfully'
    });
  } catch (err) {
    res.status(500).json({
        success: false,
        message: 'Failed to update labour report',
        error: err
    });
  }
};
