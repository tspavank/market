require('../page/companyinfo.js'); 

 var ExternalSystems_selected = function(){
	 

	 this.nextbutton = function(){
		 
		 element(by.id('externalSystemsSelectedNext')).click();
		 
		 return require('./companyinfo.js');
	 };
	 
	 
 };
 
 module.exports = new ExternalSystems_selected();