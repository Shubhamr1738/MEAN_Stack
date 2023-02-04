const UserData = require('../mongoDB/models/userData-model');
const UserForm = require('../mongoDB/models/userForm-model');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken')
exports.signupUserData = async (req, res,next) => {
    try {
      // Extracting user data from request body
      const { firstName, lastName, username, email, password,site } = req.body;
      if (!firstName || !lastName || !username || !email || !password|| !site) {
        return res.status(400).json({ message: 'Missing required fields' });
      }    
      // Check if the user already exists
      const existingUser = await UserData.findOne({ $or: [{email: email}, {username: username}]});
      if (existingUser) {
        return res.status(409).json({ message: 'Email or username already exists' });
      }
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      // Create new user
      const newUser = new UserData({
        firstName,
        lastName,
        username,
        email,
        password:hashedPassword,
        site,
      });
  
      // Save new user to the database
      await newUser.save();
  
      // Return success message
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  };
  
  exports.loginUserData = async (req, res,next) => {
    try {
        // Extracting user data from request body
        const { username, password } = req.body;
        if(!username) {
            return res.status(400).json({ message: 'username is required' });
        }
        if(!password) {
            return res.status(400).json({ message: 'password is required' });
        }

        // Check if the user already exists
        const existingUser = await UserData.findOne({username: username});
        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid username' });
        }
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        // check if password match
        if(!passwordMatch){
            return res.status(401).json({ message: 'Invalid password' });
        }
        const toekn = jwt.sign(
          {username:existingUser.username,userId:existingUser._id},
          'shinigami_stranger_69',
          {expiresIn:"15d"}
          );
        // Return success message
        res.status(200).json({ 
          message: 'login successfully',
          toekn:toekn,
          expiresIn:"15d"
        });
    } catch (error) {
        // Return error message
        res.status(500).json({ message: 'Error while login', error });
    }    
}
exports.getAllUsers = (req, res) => {
  UserData.find({}, (err, data) => {
      if (err) return res.status(500).json({ success: false, message: "Failed to retrieve users", error: err });
      res.status(200).json({ success: true, message: "Users retrieved successfully", data: data });
  });
};


exports.addSite = async (req, res) => {
  try {
  const newSite = new UserForm({site: req.body.site});
  await newSite.save();
  res.status(200).send({ message: 'Site added successfully', site: newSite });
  } catch (err) {
  res.status(500).send(err);
  }
  };

  exports.updateSite = async (req, res) => {
    try {
      const success = await UserForm.updateOne({ _id: req.params.id }, { $set: { site: req.body.site } });
      if (success.nModified > 0) {
        res.status(200).json({ message: 'Site updated successfully' });
      } else {
        res.status(404).json({ message: 'Site not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

