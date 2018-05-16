require('../page/ExternalSystems_selected.js'); 

 var ExternalSystems = function(){
	 
/* 	this.samdata = function(){ */
		 
		/*  element(by.id('sam')).click(); */
/* 		 element(by.id('samdata')).click();
	 };

	this.regid = function(value){
		 
		 element(by.id('regid')).sendKeys(value);
	 };
	 
	this.connect_account_button = function(){
		 
		 element(by.id('connectButton')).click();
	 };
	  */
	 this.nextbutton = function(){
		 
		 element(by.id('externalSystemsNext')).click();
		 
		 return require('./ExternalSystems_selected.js');
	 };
	 
	 
 };
 
 module.exports = new ExternalSystems();