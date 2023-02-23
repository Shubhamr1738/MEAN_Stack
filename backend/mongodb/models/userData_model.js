const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    role: {
        type: String,
        enum: ['user', 'admin','manager'],
        default: 'user'
    },
    site: [{
        siteName:{
            type:String,
            require:true,
        },
        createdAt:{
            type:Date,
            default:Date.now()
        },
        siteCompleted:{
            type:Boolean,
            default:false
        }
    }],
    companyName:{
        type:String
    }
});



module.exports = mongoose.model('UserData', userDataSchema);