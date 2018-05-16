var util= require('util');
var waiting = browser.sleep(2000);
describe('to test the zerv application',function(){
	    beforeEach(function(){
		browser.manage().window().maximize();
		browser.get('http://localhost:4020/#/temp');
	    });
	    var home_page = require('../page/Home_page.js');
		//var InvitationLink ('../page/InvitationLink.js');
	
 	 it('it should be able to create account', function(){
		var InvitationLink  = home_page.InvitationLink();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/InvitationLink');
		var Account_info = InvitationLink.in_link();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/accountInformation');
		Account_info.userName('abc'); 
		Account_info.password('ab@c'); 
		Account_info.phonenumber('123456789'); 
		var Account_Confirmation = Account_info.nextButton();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/createdConfirmation');
		browser.sleep(3000);
	    });
		
		it('it should be able to login', function(){
		var Login_page  = home_page.Login_page();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/login');
		Login_page.userName('abc'); 
		Login_page.password('ab@c');
		var profile = Login_page.loginButton();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/profile');
		browser.sleep(3000);
	    }); 
		
		
		it('it should be able to Do MFA for Email', function(){
		MfaRequest  = home_page.MfaRequest();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaRequest');
		MfaChooseMethod = MfaRequest.mfaRequestNext();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaChooseMethod');
		MfaChooseMethod.emailButton();
		var mfaEnterCodeEmail = MfaChooseMethod.SendCodeButton1();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaEnterCodeEmail');
	    mfaEnterCodeEmail.temporaryIdentificationCode('abc'); 
	    mfaEnterCodeEmail.password('ab@c');
		profile = mfaEnterCodeEmail.MfaCodeEmailSendCodeButton();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/profile');		
		browser.sleep(3000);
	    }); 
		
		it('it should be able to Do MFA for Text', function(){
		var MfaRequest  = home_page.MfaRequest();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaRequest');
		var MfaChooseMethod = MfaRequest.mfaRequestNext();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaChooseMethod');
		MfaChooseMethod.TextButton();
		var mfaEnterCodePhoneText = MfaChooseMethod.SendCodeButton();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaEnterCodePhoneText');
	    mfaEnterCodePhoneText.temporaryIdentificationCode('abc'); 
	    mfaEnterCodePhoneText.password('ab@c');
		var profile = mfaEnterCodePhoneText.PhoneTextSendCodeButton();  
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/profile');
		browser.sleep(3000);
	    });  
		
		it('it should be able to Do MFA for Call', function(){
		MfaRequest  = home_page.MfaRequest();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaRequest');
		MfaChooseMethod = MfaRequest.mfaRequestNext();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaChooseMethod');
		MfaChooseMethod.callButton();
		var mfaEnterCodePhoneCall = MfaChooseMethod.SendCodeButton2();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/mfaEnterCodePhoneCall');
	    mfaEnterCodePhoneCall.temporaryIdentificationCode('abc'); 
	    mfaEnterCodePhoneCall.password('ab@c');
		profile = mfaEnterCodePhoneCall.PhoneCallSendCodeButton();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/profile');		
		browser.sleep(3000);
	    }); 
	
	
		/* 
		it('should perform onboarding automation', function(){
		var ExternalSystems  = home_page.ExternalSystems();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/externalSystems');
		ExternalSystems.samdata();
		ExternalSystems.regid('reg@1234');
		ExternalSystems.connect_account_button();  
		var ExternalSystems_selected = ExternalSystems.nextbutton();
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/externalSystemsSelected'); 
		
		var companyInfo = ExternalSystems_selected.nextbutton();
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/companyInfo');  
		companyInfo.legalBusinessName('abcdefg');  
		companyInfo.doingBusinessAs('manager');  
		companyInfo.corporateStructureDescription('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem '); 
		companyInfo.mailingAddress('abcd@gmail.com');
		companyInfo.state('Washington DC');  
		companyInfo.country('USA');  
		companyInfo.expirationDate('31-12-1996');  
		companyInfo.pscCode('560420');  
		companyInfo.duns('1055');  
		companyInfo.cage('akdl5');  
		
		var profileDetails = companyInfo.nextbutton();
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/profileDetails'); 
		profileDetails.companyDescription('abcdefg');  
		profileDetails.businessClassification('manager'); 
		profileDetails.logo('abcdefg');  
		profileDetails.facebook('manager'); 
		profileDetails.instagram('abcdefg');  
		profileDetails.twitter('manager'); 
		profileDetails.accountType('abcdefg');  
		profileDetails.EIN('manager'); 
		profileDetails.FFLLicenseNumber('abcdefg');  
		profileDetails.ATFLicenseNumber('manager'); 
		profileDetails.ITARLicenseNumber('abcdefg');  
		profileDetails.BusinessTaxLicenseNumber('manager'); 
		
		var addIntrests = profileDetails.nextbutton();
		
		expect(browser.getCurrentUrl()).toEqual('http://localhost:4020/#/addIntrests');  
	    var profileDetails = companyInfo.nextbutton();
	 	browser.sleep(3000);
	    });  */
});