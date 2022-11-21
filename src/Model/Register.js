const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResisterSchema = new Schema({
    name:{type :String, required : true},
    email:{type: String, required : true , Unique : true},
    password:{type: String, required : true , Unique : true}
})

module.exports = mongoose.model('Resister', ResisterSchema);