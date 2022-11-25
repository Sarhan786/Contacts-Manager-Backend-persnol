const Contact = require("../../Model/Contact");

const PATCH = async (req, res) => {
  try {
    const findUser = await Contact.find({User : req.user._id});
    let Responce;
    if(findUser.length > 0){
      for(let elem of req.body){
     Responce =  await Contact.updateOne({User : req.user._id},{$push:{userContacts: elem}},{new:true})
      }
    }else{
       Responce = await Contact.create({
        userContacts : req.body,
        User : req.user._id
      });
    }   
    res.send({
      Responce:Responce
    })
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
};


const GET = async (req, res) => {
  try {
    const ContactData = await Contact.find({ User: req.user._id});
    res.status(200).json({
      status: "Success",
      ContactData,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
};


const DELETE = async (req, res) => {

  try {
      // console.log(req.user);
      for(let elem of req.body){
        console.log(req.user);
        const Data = await Contact.find({ User: req.user._id});
        console.log(Data);
        const ContactData = await Contact.updateOne({ User: req.user._id}, {$pull : {userContacts: {_id : elem}}});
      }
        
      res.status(200).json({
        status: "Success",
        message: "Contacts deleted",
      });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
};

const DELETEMANY = async (req, res) => {

  try {
      const ContactData = await Contact.deleteOne({ User: req.user._id});
      res.status(200).json({
        status: "Success",
        message: "Contacts deleted",
      });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
};

module.exports = { PATCH, GET, DELETE, DELETEMANY};
