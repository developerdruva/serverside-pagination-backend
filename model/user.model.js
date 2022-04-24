const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
    {
        uid : {
            type : Number,
            required : true,
            unique : true
        },
        userName: {
            type: String,
            required : true
        },
        emailId: {
            type: String,
            required : true
        },
        createdAt : {
            type: String
        },
        updatedAt : {
            type : String
        }
    }
)
module.exports = mongoose.model('users', userSchema);