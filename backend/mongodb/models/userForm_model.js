const mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
   site:{
        type:String,
        require:true
   },
    username: {
        type: String,
        ref: 'UserData',
        required: true
    },
    date: {
        type: Date,
        required : true,
    },

    cementReports: {
        openingBalance: {
            type: Number
        },
        cementReceived: {
            type: Boolean
        },
        totalStock: {
            type: Number
        },
        consumptionToday: {
            type: Number
        },
        closingBalance: {
            type: Number
        }
    },
    labourReport: [{
        nameOfAgency: {
            type: String
        },
        typeOfAgency:{
            type:String
        },
        skilled: {
            type: String
        },
        unskilled: {
            type: String
        },
        workDone: {
            type: String
        },
    }],
    materialReport: [
        {
            materialReceived: {
                type: String
            },
            supplierName: {
                type: String
            },
            quality: {
                type: String
            },
            billNo: {
                type: String
            },
            amount :{
                type:Number
            },
            paid: {
                type: Boolean
            },
            time: {
                type: String
            }
        }
    ],
    materialConsumption:[
        {
            activityName:{
                type:String           
            },
            consumptionMaterial: {
                type:String
            },
            consumptionQuantity: {
                type:Number
            },
            consumptionUnit: {
                type:String
            }
        }
    ],
    remarks: {
        type: String
    },
    dailyStatus:{
        type:Boolean,
        require:true,
        default:false
    }
});

module.exports = mongoose.model('UserForm', userFormSchema);
