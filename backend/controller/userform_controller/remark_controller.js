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
    exports.pendingdates = async (req, res, next) => {
        const { username } = req.params;
        const startdateParts = req.params.startdate.split('-');
        const startdateFormatted = `${startdateParts[1]}-${startdateParts[0]}-${startdateParts[2]}`;
        const page = parseInt(req.params.page) || 1; // Parse the page parameter to an integer, default to 1
      
        function getDatesInRange(startDate, endDate) {
          // Define a function to generate an array of dates between two dates
          const dates = [];
          let currentDate = new Date(startDate);
          while (currentDate < endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
          }
          return dates;
        }
      
        try {
          // Find all documents with the specified username and start date
          const userForms = await UserForm.find({
            username: username,
            date: { $gte: new Date(startdateFormatted) }
          });
      
          // Create a set of months between the start date and today
          const today = new Date();
          const allDates = getDatesInRange(new Date(startdateFormatted), today);
          const monthsSet = new Set(allDates.map(date => `${date.getFullYear()}-${date.getMonth()}`));
          const totalPages = monthsSet.size;
      
          // Filter out dates that have a document associated with them
          const unavailableDates = userForms.map(userForm => userForm.date.toDateString());
          const missingDates = allDates.filter(date => !unavailableDates.includes(date.toDateString()));
      
          // Group the missing dates by month
          const missingDatesByMonth = missingDates.reduce((accumulator, currentValue) => {
            const month = currentValue.getMonth();
            const year = currentValue.getFullYear();
            const key = `${year}-${month}`; // Group by year-month
            if (!accumulator[key]) {
              accumulator[key] = [];
            }
            accumulator[key].push(currentValue);
            return accumulator;
          }, {});
      
          // Get the missing dates for the current month based on the page parameter
          const months = Object.keys(missingDatesByMonth);
          const currentMonthIndex = page - 1; // Adjust the page index to start at 0
          const currentMonthKey = months[currentMonthIndex];
          const currentMonthMissingDates = missingDatesByMonth[currentMonthKey];
      
          // Pagination
          const pageSize = currentMonthMissingDates.length;
          const startIndex = 0;
          const endIndex = pageSize;
          const missingDatesPage = currentMonthMissingDates.slice(startIndex, endIndex);
      
          // Format the missing dates as strings in the format "DD-MM-YYYY"
          const formattedDates = missingDatesPage.map(date => {
            const [day, month, year] = date.toLocaleDateString('en-GB').split('/');
            return `${day}-${month}-${year}`;
          });
      
          // Return the formatted dates, pagination info, and total pages
          res.json({
            success: true,
            date: formattedDates,
            pageSize: pageSize,
            currentPage: page,
            totalPages: totalPages            
          });
      
        } catch (err) {
          res.send(err);
        }
      };
      