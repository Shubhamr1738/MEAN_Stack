const UserData = require("../../mongodb/models/userData_model");


exports.addsiteData = async (req,res)=>{
    UserData.findOneAndUpdate(
      {userid:req.params._id},
      {
        $push:{
          site:{
          siteName:req.body.siteName,
          siteCompleted:req.body.siteCompleted
          },
        },
      },
      {new:true},
      (err,UserData)=>{
        if(err){
          return res.status(500).send(err);
        }
        if(!UserData){
          return res.status(404).send("Username not found");
        }
        res.send(UserData.site);
      }
    )
  }

exports.deletesiteData = async (req,res) => {
  const {userid,sitedataid} = req.params;
  UserData.findOneAndUpdate(
    {_id:userid},
    {
      $pull:{
        site:{
          _id:sitedataid,
        },
      },
    },
    {new:true},
    (err,UserData)=>{
      if(err){
        return res.status(500).send(err);
      }
      if(!UserData){
        return res.status(404).send("User not found");
      }
      res.send(UserData.site);
    }
  )
}

exports.updatesiteData = async (req, res) => {
  try {
    const { userid, sitedataid } = req.params;
    const { siteName, siteCompleted } = req.body;

    const userData = await UserData.findById(userid);

    if (!userData) {
      return res.status(404).send('User not found');
    }

    const siteDataIndex = userData.site.findIndex(
      (siteData) => siteData._id.toString() === sitedataid
    );

    if (siteDataIndex === -1) {
      return res.status(404).send('Site data not found');
    }

    userData.site[siteDataIndex].siteName = siteName || userData.site[siteDataIndex].siteName;
    userData.site[siteDataIndex].siteCompleted = siteCompleted ?? userData.site[siteDataIndex].siteCompleted;

    const updatedUserData = await userData.save();

    res.send(updatedUserData.site[siteDataIndex]);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

exports.getsiteData = async (req,res)=>{
  UserData.findOne({_id:req.params.userid},
    (err,UserData)=>{                                  
      if(err){
        return res.status(500).send({message:"Error retriving sitedata",error:err});
        
      }
      if(!UserData){
        return res.status(404).send({message:"User not found"});
      }
      res.send({
        message:"Site Data Retrived",
        data:UserData.site,
      })
    })
}
