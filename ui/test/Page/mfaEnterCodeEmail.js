require('../page/profile.js');

 var mfaEnterCodeEmail = function(){
	 
	 this.temporaryIdentificationCode = function(value){
		 
		 element(by.model('values.temporaryIdentificationCode')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.model('values.password')).sendKeys(value);
		 
	 };
	 
	 this.MfaCodeEmailSendCodeButton = function(){
		 
		 element(by.id('mfaEnterCodeEmailSendCode')).click();
		 
		 return require('./profile.js');
	 };
	 
	 
 };
 
 module.exports = new mfaEnterCodeEmail();