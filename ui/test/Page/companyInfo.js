require('../page/profileDetails.js'); 

 var companyInfo = function(){
	 
	 this.legalBusinessName = function(value){
		 
		 element(by.model('legalBusinessName')).sendKeys(value);
	 };
	  this.doingBusinessAs = function(value){
		 
		 element(by.model('doingBusinessAs')).sendKeys(value);
	 };
	   this.corporateStructureDescription = function(value){
		 
		 element(by.model('corporateStructureDescription')).sendKeys(value);
	 };
	   this.mailingAddress = function(value){
		 
		 element(by.model('mailingAddress')).sendKeys(value);
	 };
	   this.state = function(value){
		 
		 element(by.model('state')).sendKeys(value);
	 };
	   this.country = function(value){
		 
		 element(by.model('country')).sendKeys(value);
	 };
	   this.expirationDate = function(value){
		 
		 element(by.model('expirationDate')).sendKeys(value);
	 };
	   this.pscCode = function(value){
		 
		 element(by.model('pscCode')).sendKeys(value);
	 };
	   this.duns = function(value){
		 
		 element(by.model('duns')).sendKeys(value);
	 };
	   this.cage = function(value){
		 
		 element(by.model('cage')).sendKeys(value);
	 };
	 
	 
 this.nextbutton = function(){
		 
		 element(by.id('nextbutton')).click();
		 
		 return require('./profileDetails.js');
	 };
	 
	 
 };
 
 module.exports = new companyInfo();