const UserForm = require("../../mongodb/models/userForm_model")


exports.addmaterialConsumption = async (req, res) => {
    UserForm.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: {
            materialConsumption: {
                activityName:req.body.activityName,
                consumptionMaterial:req.body.consumptionMaterial,
                consumptionQuantity: req.body.consumptionQuantity,            
                consumptionUnit: req.body.consumptionUnit,
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
        res.send(UserForm.materialConsumption);
      }
    );
  };

  exports.deletematerialConsumption = async (req, res) => {
    const { siteId, materialConsumptionId } = req.params;
    UserForm.findOneAndUpdate(
      { _id: siteId },
      {
        $pull: {
            materialConsumption: {
            _id: materialConsumptionId,
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
        console.log(UserForm.materialConsumption.length);
        res.send(UserForm.materialConsumption);
      }
    );
  };
  


  exports.updatematerialConsumption = async (req, res) => {
    UserForm.findOneAndUpdate(
      { _id: req.params.siteId, "materialConsumption._id": req.params.materialConsumptionId },
      {
        $set: {
          "materialConsumption.$.activityName": req.body.activityName,
          "materialConsumption.$.consumptionMaterial": req.body.consumptionMaterial,
          "materialConsumption.$.consumptionQuantity": req.body.consumptionQuantity,
          "materialConsumption.$.consumptionUnit": req.body.consumptionUnit,
        },
      },
      { new: true },
      (err, UserForm) => {
        if (err) {
          return res.status(500).send(err);
        }
        if (!UserForm) {
          return res.status(404).send("materialConsumption report not found");
        }
        res.send(UserForm.materialConsumption);
      }
    );
  };

  exports.getmaterialConsumption = async (req, res) => {
    UserForm.findOne({ _id: req.params.id }, (err, UserForm) => {
      if (err) {
        return res
          .status(500)
          .send({ message: "Error retrieving materialConsumption reports", error: err });
      }
      if (!UserForm) {
        return res.status(404).send({ message: "Site not found" });
      }
      res.send({
        message: "materialConsumption reports retrieved successfully",
        data: UserForm.materialConsumption,
      });
    });
  };
  