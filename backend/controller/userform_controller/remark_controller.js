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
/*
exports.pendingdate = (req, res) => {
    UserForm.find({}).sort({date: 'desc'}).limit(1).exec((err, latestForm) => {
        if (err) {
            return res.status(500).json({error: err.message});
        }
        else {
            let previousDate = new Date(latestForm[0].date);
            previousDate.setDate(previousDate.getDate() + 1);
            let today = new Date();
            let dateArray = [];
            while (previousDate <= today) {
                dateArray.push(new Date(previousDate));
                previousDate.setDate(previousDate.getDate() + 1);
            }
            return res.status(200).json({dates: dateArray});
        }
    });
};
*/
exports.pendingdate = (req, res) => {
    // Get the start date of the current month
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  
    // Find all UserForms between the start date of the current month and the current date
    UserForm.find({
        date: {
            $gte: startDate,
            $lte: currentDate
        }
    }, (err, forms) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        // Create an array of unavailable dates
        let unavailableDates = forms.map(form => new Date(form.date).setHours(0,0,0,0));
      
        // Create an array of all dates between the start date of the current month and the current date, excluding the unavailable dates
        let dateArray = [];
        let currentDateCopy = new Date(startDate);
        while (currentDateCopy <= currentDate) {
            if (!unavailableDates.includes(currentDateCopy.setHours(0,0,0,0))) {
                dateArray.push(new Date(currentDateCopy));
            }
            currentDateCopy.setDate(currentDateCopy.getDate() + 1);
        }
      
        return res.status(200).json({ dates: dateArray });
    });
};
