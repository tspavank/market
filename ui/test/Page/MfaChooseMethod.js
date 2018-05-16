
require('../page/mfaEnterCodePhoneText.js'); 
  require('../page/mfaEnterCodeEmail.js');
require('../page/mfaEnterCodePhoneCall.js');
 var MfaChooseMethod = function(){

	 this.TextButton = function(){
		 element(by.id('text')).click();
	 }; 
	  this.emailButton = function(){
		 element(by.id('byEmail')).click();
	 }; 
 	   this.callButton = function(){
		 element(by.id('call')).click();
	 }; 
	
	
  this.SendCodeButton = function(){
		 
		 element(by.id('mfaChooseMethodSendCode')).click();
			 return require('./mfaEnterCodePhoneText.js');
		
	 };	
	 this.SendCodeButton1 = function(){
		 
		 element(by.id('mfaChooseMethodSendCode')).click();
		  return require('./mfaEnterCodeEmail.js'); 
		
	 };	 
	  this.SendCodeButton2 = function(){
		 
		 element(by.id('mfaChooseMethodSendCode')).click();
		 return require('./mfaEnterCodePhoneCall.js'); 
		
	 };	
	 
	 
 };
 
 module.exports = new MfaChooseMethod();