const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    username : {
        type : String,
        required : true,
        unique : true
    }
});

UserSchema.includes(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);