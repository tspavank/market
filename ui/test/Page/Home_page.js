
  require ('../page/InvitationLink.js'); 
  require ('../page/Login_page.js'); 
  require ('../page/MfaRequest.js'); 
var home_page = function(){
	
this.InvitationLink = function(){
		
		element(by.id('hinv')).click();
		return require('./InvitationLink.js');
	};
this.Login_page = function(){
		
		element(by.id('mainlogin')).click();
		return require('./Login_page.js');
	};

this.MfaRequest = function(){
		
		element(by.id('mfa')).click();
		return require('./MfaRequest.js');
	};	
		

this.ExternalSystems = function(){
		
		element(by.id('onboarding')).click();
		return require('./ExternalSystems.js');
	};	
	
	
	
};
module.exports = new home_page();