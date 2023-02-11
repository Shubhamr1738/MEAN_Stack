const UserForm = require("../../mongodb/models/userForm_model")


exports.addSite = async (req, res) => {
    try {
        const newSite = new UserForm({username:req.params.username, site: req.body.site });
        await newSite.save();
        res.status(200).send({ message: 'Site added successfully', site: newSite, siteid: newSite._id });
    } catch (err) {
        res.status(500).send(err);
    }
};


exports.getSiteById = (req, res) => {
    UserForm.findById(req.params.id, (err, site) => {
        if (err) return res.status(400).send(err);
        if (!site) return res.status(404).send('Site not found');
        res.send(site);
    });
};

exports.getSiteByusername  = async (req, res) => {
    const { username } = req.params;
    try {
      const data = await UserForm.find({ username });
      if (!data || data.length === 0) {
        return res.status(404).json({ message: 'Data not found' });
      }
      res.status(200).json({ data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve data' });
    }
  };

  

exports.deleteSite = (req, res) => {
    UserForm.findByIdAndDelete(req.params.id, (err, site) => {
        if (err) return res.status(400).send(err);
        if (!site) return res.status(404).send('Site not found');
        res.send(site);
    });
};

exports.updateSite = (req, res) => {
    UserForm.findByIdAndUpdate(req.params.id, { site: req.body.site }, { new: true }, (err, site) => {
        if (err) return res.status(400).send(err);
        if (!site) return res.status(404).send('Site not found');
        res.send(site);
    });
};

exports.getAllData = (req, res) => {
    UserForm.find({}, (err, data) => {
        if (err) return res.status(400).send(err);
        res.send(data);
    });
};

