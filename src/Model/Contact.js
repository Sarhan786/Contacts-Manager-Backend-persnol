const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  userContacts: [
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
  User: { type: Schema.Types.ObjectId, ref: "resisters" },
});

module.exports = mongoose.model("Contact", ContactSchema);
