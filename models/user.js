const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose').default;

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name : {
    type: String,
    required : true
  }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);