
 require('../page/MfaChooseMethod.js');

 var MfaRequest = function(){

	 this.mfaRequestNext = function(){
		 
		 element(by.id('mfaRequestNext')).click();
		 
		 return require('./MfaChooseMethod.js');
	 };
	 
	 
 };
 
 module.exports = new MfaRequest();