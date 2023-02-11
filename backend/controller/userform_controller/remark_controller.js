const UserForm = require("../../mongodb/models/userForm_model")


exports.addRemarks = async (req, res) => {
    try {
        const userForm = await UserForm.findOne({ _id: req.params.id });
        if (!userForm) {
            return res.status(404).send("Site not found");
        }
        userForm.remarks = req.body.remarks;
        await userForm.save();
        res.send({ message: "Remarks added successfully" });
    } catch (err) {
        return res.status(500).send(err);
    }
};

exports.getRemarks = async (req, res) => {
    try {
        const userForm = await UserForm.findOne({ _id: req.params.id });
        if (!userForm) {
            return res.status(404).send("Site not found");
        }
        res.send({ remarks: userForm.remarks });
    } catch (err) {
        return res.status(500).send(err);
    }
};


exports.deleteRemarks = async (req, res) => {
    try {
        const userForm = await UserForm.findOne({ _id: req.params.id });
        if (!userForm) {
            return res.status(404).send("Site not found");
        }
        userForm.remarks = undefined;
        await userForm.save();
        res.send({ message: "Remarks deleted successfully" });
    } catch (err) {
        return res.status(500).send(err);
    }
};

exports.updateRemarks = async (req, res) => {
    try {
        const userForm = await UserForm.findOne({ _id: req.params.id });
        if (!userForm) {
            return res.status(404).send("Site not found");
        }
        userForm.remarks = req.body.remarks;
        await userForm.save();
        res.send(userForm.remarks);
    } catch (err) {
        return res.status(500).send(err);
    }
};
