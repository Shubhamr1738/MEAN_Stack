const UserForm = require("../../mongodb/models/userForm_model")

exports.addCementReport = async (req, res) => {
    try {
        const userForm = await UserForm.findOne({ _id: req.params.id });
        if (!userForm) {
            return res.status(404).send("Site not found");
        }
        userForm.cementReports = req.body;
        await userForm.save();
        res.send(userForm.cementReports);
    } catch (err) {
        return res.status(500).send(err);
    }
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
          res.send(userForm.cementReports);
        }
      );
    };