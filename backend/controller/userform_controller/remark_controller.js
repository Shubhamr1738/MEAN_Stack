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
    let startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setUTCHours(0, 0, 0, 0);
    startOfMonth.setUTCMonth(new Date().getUTCMonth());
    startOfMonth.setUTCFullYear(new Date().getUTCFullYear());

    UserForm.find({date: {$gte: startOfMonth}}).select('date -_id').exec((err, forms) => {
        if (err) {
            return res.status(500).json({error: err.message});
        } else {
            let availableDates = forms.map(form => new Date(form.date).toISOString().substring(0, 10));
            let currentDate = new Date().toISOString().substring(0, 10);
            let unavailableDates = [];

            for (let d = startOfMonth; d <= new Date(); d.setUTCDate(d.getUTCDate() + 1)) {
                let dateString = d.toISOString().substring(0, 10);
                if (!availableDates.includes(dateString)) {
                    unavailableDates.push(dateString);
                }
            }

            return res.status(200).json({dates: unavailableDates});
        }
    });
}


*/
exports.pendingdates = async (req, res) => {
  try {
    const { username, startdate } = req.params;

    // Convert the startdate string from "dd-mm-yyyy" format to a Date object
    const [day, month, year] = startdate.split('-').map(part => parseInt(part, 10));
    const startDate = new Date(year, month - 1, day);
    const endDate = new Date(); // create a new Date object for the current date

    const forms = await UserForm.find({ username, date: { $gte: startDate, $lte: endDate } }).select('date');

    const allDates = forms.map(form => form.date.toISOString().slice(0, 10));

    const start = startDate;
    const end = endDate;
    const dates = [];
    while (start <= end) {
      dates.push(start.toISOString().slice(0, 10));
      const newDate = start.setDate(start.getDate() + 1);
      start.setTime(newDate);
    }

    const missingDates = dates.filter(date => !allDates.includes(date));

    res.json({ success: true, data: missingDates });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

