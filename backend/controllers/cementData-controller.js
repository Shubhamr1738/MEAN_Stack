const UserForm = require("../mongoDB/models/userForm-model.js");

exports.updateCementReport = async (req, res) => {
    UserForm.findOne({ _id: req.params.id }, (err, userForm) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!userForm) {
        return res.status(404).send("Site not found");
      }
      userForm.cementReports = req.body;
      userForm.save((err) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.send(userForm.cementReports);
      });
    });
  };


  exports.getCementReport = async (req, res) => {
    UserForm.findOne({ _id: req.params.id }, (err, userForm) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!userForm) {
        return res.status(404).send("Site not found");
      }
      res.send(userForm.cementReports);
    });
  };

  exports.deleteCementReport = async (req, res) => {
    UserForm.findOneAndUpdate(
      { _id: req.params.id },
      { $unset: { cementReports: 1 } },
      { new: true },
      (err, userForm) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!userForm) {
          return res.status(404).send("Site not found");
        }
        res.send(userForm);
      }
    );
  };