const UserData = require("../../mongodb/models/userData_model");

exports.addCompanyName = async (req,res) => {
    try{
        const userData = await UserData.findOne({_id:req.params.userid});
       if (!userData){
            return res.status(404).send("User not found");
        }
        userData.companyName =req.body.companyName;
        await userData.save();
        res.status(200).send({
            message:"Company Name Added Sucessfully",
            data:userData.companyName
        })
    } catch (err){
        return res.status(500).send(err);
    }
}

exports.getCompanyName = async (req,res) =>{
    try {
        const userData = await UserData.findOne({_id:req.params.userid});
        if(!userData){
            return res.status(404).send({
                message:"No data available"
        })
        }
        res.status(200).send({
            data:userData.companyName
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

exports.deleteCompanyName = async (req,res) =>{
    try {
        const userData =await UserData.findOneAndUpdate(
            {_id:req.params.userid},
            {$unset:{companyName:1}},
            {new:true}
        );
        
        if(!userData){
           return res.status(404).send({
                message:"No data available"
            })
        }
        res.status(200).send({
            message:"Company Data Sucessfully",
        })
    } catch (err) {
       return res.status(404).send(err);
    }
}