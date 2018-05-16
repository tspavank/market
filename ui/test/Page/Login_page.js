require('../page/profile.js');

 var Login_page = function(){
	 
	 this.userName = function(value){
		 
		 element(by.model('values.userName')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.model('values.password')).sendKeys(value);
		 
	 };
	 
	 this.loginButton = function(){
		 
		 element(by.id('accountLogin')).click();
		 
		 return require('./profile.js');
	 };
	 
	 
 };
 
 module.exports = new Login_page();