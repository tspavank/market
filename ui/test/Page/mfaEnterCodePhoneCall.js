require('../page/profile.js');

 var mfaEnterCodePhoneCall = function(){
	 
	 this.temporaryIdentificationCode = function(value){
		 
		 element(by.model('values.temporaryIdentificationCode')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.model('values.password')).sendKeys(value);
		 
	 };
	 
	 this.PhoneCallSendCodeButton = function(){
		 
		 element(by.id('mfaEnterCodePhoneCallSendCode')).click();
		 
		 return require('./profile.js');
	 };
	 
	 
 };
 
 module.exports = new mfaEnterCodePhoneCall();