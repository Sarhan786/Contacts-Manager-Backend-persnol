const Contact = require("../../Model/Contact");

const PATCH = async (req, res) => {
  try {
    console.log(req.params.id)
    const findUser = await Contact.find({User : req.params.id});
    console.log(findUser.length > 0);
    if(findUser.length > 0){
      for (let elem of req.body){
        const Result = await Contact.findByIdAndUpdate({User : req.params.id},{$push:{userContacts: elem}});
      }
    }else{
      const ContactData = await Contact.create({
        userContacts : req.body,
        User : req.params.id
      });
    }
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


const GET = async (req, res) => {
  console.log(req.resister);
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
