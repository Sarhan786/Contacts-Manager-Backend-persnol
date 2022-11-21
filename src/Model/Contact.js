const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  usersContacts: [
    {
      name: { type: String },
      Designation: String,
      Company: String,
      Industry: String,
      Email: String,
      Phone_number: String,
      Country: String,
    },
  ],
  Users : { type: mongoose.Schema.Types.ObjectId , ref : "Resister"},
  date : {type : String},
  Time : {type : String}
});

module.exports = mongoose.model("Contact", ContactSchema);