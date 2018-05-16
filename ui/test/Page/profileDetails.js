 require('../page/companyInfo.js');  

 var profileDetails = function(){
	 
	 this.companyDescription = function(value){
		 
		 element(by.model('companyDescription')).sendKeys(value);
	 };
	  this.businessClassification = function(value){
		 
		 element(by.model('businessClassification')).sendKeys(value);
	 };
	   this.logo = function(value){
		 
		 element(by.model('logo')).sendKeys(value);
	 };
	   this.facebook = function(value){
		 
		 element(by.model('facebook')).sendKeys(value);
	 };
	   this.instagram = function(value){
		 
		 element(by.model('instagram')).sendKeys(value);
	 };
	   this.twitter = function(value){
		 
		 element(by.model('twitter')).sendKeys(value);
	 };
	   this.accountType = function(value){
		 
		 element(by.model('accountType')).sendKeys(value);
	 };
	   this.EIN = function(value){
		 
		 element(by.model('EIN')).sendKeys(value);
	 };
	   this.FFLLicenseNumber = function(value){
		 
		 element(by.model('FFLLicenseNumber')).sendKeys(value);
	 };
	   this.ATFLicenseNumber = function(value){
		 
		 element(by.model('ATFLicenseNumber')).sendKeys(value);
	 };
	    this.ITARLicenseNumber = function(value){
		 
		 element(by.model('ITARLicenseNumber')).sendKeys(value);
	 };
	    this.BusinessTaxLicenseNumber = function(value){
		 
		 element(by.model('BusinessTaxLicenseNumber')).sendKeys(value);
	 };
	 
 this.nextbutton = function(){
		 
		 element(by.id('nextbutton')).click();
		 
		 return require('./companyInfo.js');
	 };
	 
	 
 };
 
 module.exports = new profileDetails();