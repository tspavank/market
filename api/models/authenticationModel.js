var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var authenticationSchema = new Schema({
 
 userId: Number,
 userName :String,
 encryptedDbPassword:String,
 encryptedUserPassword:String,
 emailAddress:String,
 phoneNumber:String,
 mfaType1:String,
 mfaType2:String,
 mfaVerificationCode1:String,
 mfaVerificationCode2:String,
 mfaStatus1:String,
 mfaStatus2:String,
 sessionNumber:Number,
 startDate:Date,
 endDate:Date,
 status:{type : String, default: "INACTIVE"},
 description:String,
 lastLogonDate:Date,
 passwordDate:Date,
 passwordAccessesLeft:Number,
 passwordLifespanAccesses:Number,
 passwordLifespanDays:Number,
 ZERVPlatformAccNumber:Number,
 crPlatformAccNumber:Number,
 lastUpdateDate:Date,
 lastUpdatedBy:Number,
 creationDate:Date,
 createdBy:Number,
 lastUpdateLogin:Number,


});
var authenticationModel = mongoose.model('authentication', authenticationSchema);

module.exports = authenticationModel;