
var Account_info = function(){
	
	this.userName = function(value){
		 
		 element(by.css('input[type=text]')).sendKeys(value);
	 };
	 
	 this.password = function(value){
		 
		 element(by.css('input[type=password]')).sendKeys(value);
		 
	 };
	 this.phonenumber = function(value){
		 
		 element(by.xpath('.//*[@id="dashboard"]/div/div/div/div/div/div/div/div/div/div[3]/form/div[3]/div[2]/input')).sendKeys(value);
	 };
	 this.nextButton = function(){
		 
		 element(by.id('next')).click();
		 
		 return require('./Account_page.js');
	 };
};
 module.exports = new Account_info();