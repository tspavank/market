 require('../page/Account_info.js'); 

var InvitationLink = function(){
	
	this.in_link = function(){
		
	element(by.id('inv')).click();
	return require('./Account_info.js');
	};

};
 module.exports = new InvitationLink();