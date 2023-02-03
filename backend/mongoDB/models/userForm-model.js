const  mongoose = require('mongoose');

const userFormSchema = new mongoose.Schema({
    site:{
        type:String,
    },
    date:{
        type:Date,
        default: Date.now()
    },
labourReport:[{
    name: {
        type:String
    },
    skilled: {
        type:String
    },
    unskilled: {
        type:String
    },
    workDone: {
        type:String
    },
}],
cementReports:{
    openingBalance: {
        type:Number
    },
    cementReport:{
        type:Boolean
    },
    totalStock:{
        type:Number
    },
    consumptionDetails:{
        type:Number
    },
    closingBalance: {
        type:Number
    }
},
materialReport:[
    {
        materialReceived: {
            type:String
        },
        supplierName: {
            type:String
        },
        quality:{
            type:String
        },
        challanNo:{
            type:String
        },
        time:{
            type:String
        }
    }
],
remarks:{
    type:String
}
});

module.exports = mongoose.model('UserForm', userFormSchema);
