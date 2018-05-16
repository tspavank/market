require('../page/profile.js');

 var mfaEnterCodePhoneText = function(){
	 
	 this.temporaryIdentificationCode = function(value){
		 
		 element(by.model('values.temporaryIdentificationCode')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.model('values.password')).sendKeys(value);
		 
	 };
	 
	 this.PhoneTextSendCodeButton = function(){
		 
		 element(by.id('mfaEnterCodePhoneTextSendCode')).click();
		 
		 return require('./profile.js');
	 };
	 
	 
 };
 
 module.exports = new mfaEnterCodePhoneText();