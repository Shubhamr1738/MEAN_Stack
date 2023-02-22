const UserData = require("../../mongodb/models/userData_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signupUserData = async (req, res, next) => {
    try {
        // Extracting user data from request body
        const { fullName, username, email, password, role } = req.body;
        if (!fullName || !username || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Check if the user already exists
        const existingUser = await UserData.findOne({ $or: [{ email: email }, { username: username }] });
        if (existingUser) {
            return res.status(409).json({ message: 'Email or username already exists' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = new UserData({
            fullName,
            username,
            email,
            password: hashedPassword,
            role
        });

        // Save new user to the database
        await newUser.save();

        // Return success message
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};


exports.loginUserData = async (req, res, next) => {
    try {
        // Extracting user data from request body
        const { username, password } = req.body;
        if (!username) {
            return res.status(400).json({ message: 'username is required' });
        }
        if (!password) {
            return res.status(400).json({ message: 'password is required' });
        }

        // Check if the user already exists
        const existingUser = await UserData.findOne({ username: username });
        if (!existingUser) {
            return res.status(401).json({ message: 'Invalid username' });
        }
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        // check if password match
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        const token = jwt.sign(
            { username: existingUser.username, userId: existingUser._id },
            'shinigami_stranger_69',
            { expiresIn: 36000 }
        );
        // Return success message
        res.status(200).json({
            message: 'login successfully',
            token: token,
            id: existingUser._id,
            message: (existingUser._id, token),
            expiresIn: 36000
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


exports.deleteUserData = async (req, res, next) => {
    try {
        // Extracting userId from request parameters
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({ message: 'User id is required' });
        }
        // Find the user with the given userId and delete it
        const deletedUser = await UserData.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Return success message
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        // Return error message
        res.status(500).json({ message: 'Error deleting user', error });
    }
};

exports.updateUserData = async (req, res, next) => {
    try {
        // Extracting userId from request parameters
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({ message: 'User id is required' });
        }
        // Find the user with the given userId and update it
        const updatedUser = await UserData.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Return success message
        res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
        // Return error message
        res.status(500).json({ message: 'Error updating user', error });
    }
};


exports.updatePassword = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const { currentPassword, newPassword } = req.body;
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ message: 'currentPassword and newPassword are required' });
        }
        const user = await UserData.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Incorrect current password' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating password' });
    }
};
exports.findUserByUsername = async (req, res, next) => {
    try {
        // Extracting username from request parameters
        const username = req.params.username;
        if (!username) {
            return res.status(400).json({ message: 'Username is required' });
        }
        // Find the user with the given username
        const user = await UserData.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Return success message with user data
        res.status(200).json({ message: 'User found', data: user });
    } catch (error) {
        // Return error message
        res.status(500).json({ message: 'Error finding user', error });
    }
};


