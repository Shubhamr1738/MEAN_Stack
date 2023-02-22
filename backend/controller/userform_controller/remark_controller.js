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
    let startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    UserForm.find({date: {$gte: startOfMonth}}).select('date -_id').exec((err, forms) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            let availableDates = forms.map(form => new Date(form.date).toISOString().substring(0, 10));
            let currentDate = new Date().toISOString().substring(0, 10);
            let unavailableDates = [];

            for (let d = startOfMonth; d <= new Date(); d.setDate(d.getDate() + 1)) {
                let dateString = d.toISOString().substring(0, 10);
                if (!availableDates.includes(dateString) && dateString !== currentDate) {
                    unavailableDates.push(dateString);
                }
            }

            return res.status(200).json({dates: unavailableDates});
        }
    });
}
