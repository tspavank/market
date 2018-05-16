
var Account_info = function(){
	
	this.userName = function(value){
		 
		 element(by.model('values.createAccountEmail')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.model('values.createAccountPassword')).sendKeys(value);
		 
	 };
	 this.phonenumber = function(value){
		 
		 element(by.model('values.createAccountPhNumber')).sendKeys(value);
	 };
	 this.nextButton = function(){
		 
		 element(by.id('createAccountNext')).click();
	 };
};
 module.exports = new Account_info();