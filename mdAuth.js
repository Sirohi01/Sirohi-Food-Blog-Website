const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authSchema = new Schema({
    userName: {
        type : String,
        required : true
    },
    userEmail: {
        type : String,
        required : true
    },
    userPass: {
        type : String,
        required : true
    }
},{timestamps:true})

const MdAuth = mongoose.model('MdAuth',authSchema);
module.exports = MdAuth;