var angular;
var App = angular.module('mainApp', ['ui.router']).run(function($rootScope) {});
App.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider

    // Stack Management and views ==========================================
    .state('intakeForm', {
      url: '/intakeForm',
      templateUrl: 'app/components/loggedOut/intakeForm/intakeForm.html',
      controller: 'intakeFormController'
    })
    .state('InvitationLink', {
      url: '/InvitationLink',
      templateUrl: 'app/components/loggedOut/userReceivedInvitationLink/invitationLink.html',
      controller: 'invitationLinkController'
    })
    .state('accountInformation', {
      url: '/accountInformation',
      templateUrl: 'app/components/loggedOut/enterAccountInformation/accountInformation.html',
      controller: 'accountInformationController'
    })
    .state('createdConfirmation', {
      url: '/createdConfirmation',
      templateUrl: 'app/components/loggedOut/enterAccountInformation/accountInformationConfirmation/createdConfirmation.html',
      controller: 'createdConfirmationController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'app/components/loggedOut/login/login.html',
      controller: 'loginController'
    })
    .state('mfaRequest', {
      url: '/mfaRequest',
      templateUrl: 'app/components/loggedOut/login/mfaRequest/mfaRequest.html',
      controller: 'mfaRequestController'
    })
    .state('mfaChooseMethod', {
      url: '/mfaChooseMethod',
      templateUrl: 'app/components/loggedOut/login/mfaChooseMethod/mfaChooseMethod.html',
      controller: 'mfaChooseMethodController'
    })
    .state('mfaEnterCodeEmail', {
      url: '/mfaEnterCodeEmail',
      templateUrl: 'app/components/loggedOut/login/mfaEnterCodeEmail/mfaEnterCodeEmail.html',
      controller: 'mfaEnterCodeEmailController'
    })
    .state('mfaEnterCodePhoneText', {
      url: '/mfaEnterCodePhoneText',
      templateUrl: 'app/components/loggedOut/login/mfaEnterCodePhoneText/mfaEnterCodePhoneText.html',
      controller: 'mfaEnterCodePhoneTextController'
    })
    .state('mfaEnterCodePhoneCall', {
      url: '/mfaEnterCodePhoneCall',
      templateUrl: 'app/components/loggedOut/login/mfaEnterCodePhoneCall/mfaEnterCodePhoneCall.html',
      controller: 'mfaEnterCodePhoneCallController'
    })
    .state('externalSystems', {
      url: '/externalSystems',
      templateUrl: 'app/components/onboarding/externalSystems/externalSystems_1/externalSystems.html',
      controller: 'externalSystemsController'
    })
    .state('externalSystemsSelected', {
      url: '/externalSystemsSelected',
      templateUrl: 'app/components/onboarding/externalSystems/externalSystems_2/externalSystemsSelected.html',
      controller: 'externalSystemsSelectedController'
    })
    .state('companyInfo', {
      url: '/companyInfo',
      templateUrl: 'app/components/onboarding/companyInfo/companyInfo.html',
      controller: 'companyInfoController'
    })
    .state('profileDetails', {
      url: '/profileDetails',
      templateUrl: 'app/components/onboarding/profileDetails/profileDetails.html',
      controller: 'profileDetailsController'
    })
    .state('addInterests', {
      url: '/addInterests',
      templateUrl: 'app/components/onboarding/addInterests/addInterests.html',
      controller: 'addInterestsController'
    })
    .state('tokenAccess', {
      url: '/tokenAccess',
      templateUrl: 'app/components/onboarding/tokenAccess/tokenAccess.html',
      controller: 'tokenAccessController'
    })
    .state('confirmation', {
      url: '/confirmation',
      templateUrl: 'app/components/onboarding/confirmation/confirmation.html',
      controller: 'confirmationController'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'app/components/account/profile/profile.html',
      controller: 'profileController'
    })
    .state('X_personProfile', {
      url: '/X_personProfile',
      templateUrl: 'app/components/tradingPartners/viewAtherTradingPartnerProfile/X_personProfile.html',
      controller: 'X_personProfileController'
    })
    .state('groupsFavorites', {
      url: '/groupsFavorites',
      templateUrl: 'app/components/tradingPartners/groupsFavorites/groupsFavorites.html',
      controller: 'groupsFavoritesController'
    })
    .state('vendors', {
      url: '/vendors',
      templateUrl: 'app/components/tradingPartners/vendors.html',
      controller: 'vendorsController'
    })
    .state('temp', {
      url: '/temp',
      templateUrl: 'app/components/temp/allpages.html',
      controller: 'allpagesController'
    })
    /**********************************marketplace**********************/
    .state('createNewSellListing_Step-1', {
      url: '/createNewSellListing_Step-1',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/createNewSell_Listing/createNewSellListing_Step-1/createNewSellListing_Step-1.html',
      controller: 'createNewSellListing_Step-2Controller'
    })
    .state('createNewSellListing_Step-2', {
      url: '/createNewSellListing_Step-2',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/createNewSell_Listing/createNewSellListing_Step-2/createNewSellListing_Step-2.html',
      controller: 'createNewSellListing_Step-2Controller'
    })
    .state('createNewSellListing_Step-3', {
      url: '/createNewSellListing_Step-3',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/createNewSell_Listing/createNewSellListing_Step-3/createNewSellListing_Step-3.html',
      controller: 'createNewSellListing_Step-3Controller'
    })
    .state('createNewSellListing_Step-4', {
      url: '/createNewSellListing_Step-4',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/createNewSell_Listing/createNewSellListing_Step-4/createNewSellListing_Step-4.html',
      controller: 'createNewSellListing_Step-4Controller'
    })
    .state('createNewSellListing_Step-5', {
      url: '/createNewSellListing_Step-5',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/createNewSell_Listing/createNewSellListing_Step-5/createNewSellListing_Step-5.html',
      controller: 'createNewSellListing_Step-5Controller'
    })
    .state('activeSellOffers', {
      url: '/activeSellOffers',
      templateUrl: 'app/components/marketPlace/activeSellOffers/activeSellOffers.html',
      controller: 'activeSellOffersController'
    })
    .state('awaitingPayment', {
      url: '/awaitingPayment',
      templateUrl: 'app/components/marketPlace/activeSellOffers/activeSellOffer_Details/awaitingPayment.html',
      controller: 'awaitingPaymentController'
    })
    .state('awaitingResponse', {
      url: '/awaitingResponse',
      templateUrl: 'app/components/marketPlace/activeSellOffers/activeSellOffer_Details/awaitingResponse.html',
      controller: 'awaitingResponseController'
    })
    .state('salesOpportunities_Listings', {
      url: '/salesOpportunities_Listings',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/salesOpportunities_Listings.html',
      controller: 'salesOpportunities_ListingsController'
    })
    .state('salesOpportunities_Matches', {
      url: '/salesOpportunities_Matches',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Matches/salesOpportunities_Matches/salesOpportunities_Matches.html',
      controller: 'salesOpportunities_MatchesController'
    })
    .state('matchedBuyListingDetails', {
      url: '/matchedBuyListingDetails',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Matches/matchedBuyListingDetails/matchedBuyListingDetails.html',
      controller: 'matchedBuyListingDetailsController'
    })
    .state('placeOfferToSell', {
      url: '/placeOfferToSell',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Matches/matchedBuyListingDetails/placeOfferToSell/placeOfferToSell.html',
      controller: 'placeOfferToSellController'
    })
    .state('placeOfferToSellConfirmation', {
      url: '/placeOfferToSellConfirmation',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Matches/matchedBuyListingDetails/placeOfferToSell/placeOfferToSellConfirmation/placeOfferToSellConfirmation.html',
      controller: 'placeOfferToSellConfirmationController'
    })
    .state('acceptBidConfirmation', {
      url: '/acceptBidConfirmation',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/sellListingDetails/acceptBidConfirmation/acceptBidConfirmation.html',
      controller: 'acceptBidConfirmationController'
    })
    .state('denyBidConfirmation', {
      url: '/denyBidConfirmation',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/sellListingDetails/denyBidConfirmation/denyBidConfirmation.html',
      controller: 'denyBidConfirmationController'
    })
    .state('sellListingDetails', {
      url: '/sellListingDetails',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/sellListingDetails/sellListingDetails/sellListingDetails.html',
      controller: 'sellListingDetailsController'
    })
    .state('createNewSell_Interest', {
      url: '/createNewSell_Interest',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/createNewSell_Interest/createNewSell_Interest/createNewSell_Interest.html',
      controller: 'createNewSell_InterestController'
    })
    .state('createNewSell_Interest_Confirmation', {
      url: '/createNewSell_Interest_Confirmation',
      templateUrl: 'app/components/marketPlace/salesOpportunities_Listings/createNewSell_Interest/Confirmation/createNewSell_Interest_Confirmation.html',
      controller: 'createNewSell_Interest_ConfirmationController'
    })


    /**********************************sales history**********************/

    .state('salesHistory', {
      url: '/salesHistory',
      templateUrl: 'app/components/marketPlace/salesHistory/salesHistory.html',
      controller: 'salesHistoryController'
    })
    .state('addTrackingInformation', {
      url: '/addTrackingInformation',
      templateUrl: 'app/components/marketPlace/salesHistory/addTrackingInformation/addTrackingInformation.html',
      controller: 'addTrackingInformationController'
    })
    .state('createShippingLabel', {
      url: '/createShippingLabel',
      templateUrl: 'app/components/marketPlace/salesHistory/createShippingLabel/createShippingLabel.html',
      controller: 'createShippingLabelController'
    })
    .state('shippingLabelCreated', {
      url: '/shippingLabelCreated',
      templateUrl: 'app/components/marketPlace/salesHistory/shippingLabelCreated/shippingLabelCreated.html',
      controller: 'shippingLabelCreatedController'
    })
    .state('salesViewDetails', {
      url: '/salesViewDetails',
      templateUrl: 'app/components/marketPlace/salesHistory/viewDetails/viewDetails.html',
      controller: 'viewDetailsController'
    })
    .state('salesRateTransaction', {
      url: '/salesRateTransaction',
      templateUrl: 'app/components/marketPlace/salesHistory/rateTransaction/rateTransaction.html',
      controller: 'rateTranscationController'
    })
    /**********************************sales history****  Buying Opportuinities listing********************/

    .state('buyingOpportunities_Listings', {
      url: '/buyingOpportunities_Listings',
      templateUrl: 'app/components/marketPlace/buyingOpportunities_Listings/buyingOpportunities_Listings/buyingOpportunities_Listings.html',
      controller: 'buyingOpportunities_ListingsController'
    })
    .state('createNewBuyInterest', {
      url: '/createNewBuyInterest',
      templateUrl: 'app/components/marketPlace/buyingOpportunities_Listings/createNewBuyInterest/createNewBuyInterest.html',
      controller: 'createNewBuyInterestController'
    })


    /**********************************  Buying Opportuinities matches**********************/
    .state('buyingOpportunities_Matches', {
      url: '/buyingOpportunities_Matches',
      templateUrl: 'app/components/marketPlace/buyingOpportunities_Matches/buyingOpportunities_Matches/buyingOpportunities_Matches.html',
      controller: 'buyingOpportunities_MatchesController'
    })
	
	.state('buyNowConfirmation', {
      url: '/buyNowConfirmation',
      templateUrl: 'app/components/marketPlace/buyingOpportunities_Matches/buyNow/buyNowConfirmation/buyNowConfirmation.html',
      controller: 'buyNowConfirmationController'
    })
    .state('matchedSellListingDetails', {
      url: '/matchedSellListingDetails',
      templateUrl: 'app/components/marketPlace/buyingOpportunities_Matches/matchedSellListingDetails/matchedSellListingDetails.html',
      controller: 'matchedSellListingDetailsController'
    })
    .state('placeBid', {
      url: '/placeBid',
      templateUrl: 'app/components/marketPlace/buyingOpportunities_Matches/matchedSellListingDetails/placeBid/placeBid.html',
      controller: 'placeBidController'
    })
    .state('placeBidConfirmation', {
      url: '/placeBidConfirmation',
      templateUrl: 'app/components/marketPlace/buyingOpportunities_Matches/matchedSellListingDetails/placeBid/bidPlacedConfirmation/bidPlacedConfirmation.html',
      controller: 'bidPlacedConfirmationController'
    })
    /**********************************  active buy offer**********************/

    .state('activeBuyOffers', {
      url: '/activeBuyOffers',
      templateUrl: 'app/components/marketPlace/activeBuyOffers/activeBuyOffers.html',
      controller: 'activeBuyOffersController'
    })
    .state('activeBuyOffers_awaitingPayment', {
      url: '/activeBuyOffers_awaitingPayment',
      templateUrl: 'app/components/marketPlace/activeBuyOffers/activeBuyOffer_Details/activeBuyOffer_Details_AwaitingPayment/awaitingPayment.html',
      controller: 'awaitingPaymentController'
    })
    .state('activeBuyOffers_awaitingPayment_ConfirmPayment', {
      url: '/activeBuyOffers_awaitingPayment_ConfirmPayment',
      templateUrl: 'app/components/marketPlace/activeBuyOffers/activeBuyOffer_Details/activeBuyOffer_Details_AwaitingPayment/confirmPayment/confirmPayment.html',
      controller: 'confirmPaymentController'
    })
    .state('activeBuyOffers_awaitingPayment_ConfirmPayment_BidPayment', {
      url: '/activeBuyOffers_awaitingPayment_ConfirmPayment_BidPayment',
      templateUrl: 'app/components/marketPlace/activeBuyOffers/activeBuyOffer_Details/activeBuyOffer_Details_AwaitingPayment/confirmPayment/confirmPayment_BidPayment/confirmPayment_BidPayment.html',
      controller: 'confirmPayment_BidPaymentController'
    })
    .state('activeBuyOffers_awaitingResponse', {
      url: '/activeBuyOffers_awaitingResponse',
      templateUrl: 'app/components/marketPlace/activeBuyOffers/activeBuyOffer_Details/activeBuyOffer_Details_AwaitingResponse/awaitingResponse.html',
      controller: 'awaitingPaymentController'
    })

    /**********************************Purchase History**********************/
    .state('purchasingHistory', {
      url: '/purchasingHistory',
      templateUrl: 'app/components/marketPlace/purchasingHistory/purchasingHistory.html',
      controller: 'purchasingHistoryController'
    })
    .state('viewPublicTransaction', {
      url: '/viewPublicTransaction',
      templateUrl: 'app/components/marketPlace/purchasingHistory/viewPublicTransactions/viewPublicTransactions.html',
      controller: 'viewPublicTransactionsController'
    })
    .state('ratePurchase', {
      url: '/ratePurchase',
      templateUrl: 'app/components/marketPlace/purchasingHistory/ratePurchase/ratePurchase.html',
      controller: 'ratePurchaseController'
    })
    .state('confirmReceiptOfProduct', {
      url: '/confirmReceiptOfProduct',
      templateUrl: 'app/components/marketPlace/purchasingHistory/confirmReceiptOfProduct/confirmReceiptOfProduct.html',
      controller: 'confirmReceiptOfProductController'
    })

    /**********************************marketplace**********************/
    /**********************************HOME *********************************/

    .state('about', {
      url: '/about',
      templateUrl: 'app/components/home/about/about.html',
      controller: 'aboutController'
    })
	.state('dashboard', {
            url: '/dashboard',
             templateUrl: 'app/components/home/dashboard/dashboard.html',
             controller:'dashboardController'
        })
    .state('help', {
      url: '/help',
      templateUrl: 'app/components/help/help.html',
      controller: 'helpController'
    })
    .state('notifications', {
      url: '/notifications',
      templateUrl: 'app/components/notifications/notifications.html',
      controller: 'notificationsController'
    })
  /**********************************HOME *********************************/
});
App.controller('democt', function($scope, $location, $rootScope) {
  $scope.hostname = "http://" + window.location.host;
  $rootScope.$on('$locationChangeSuccess', function(event, newUrl, oldUrl) {
    console.log('Changed from ', oldUrl, ' to ', newUrl, $location.path());
    $scope.currentLocation = $location.path();
  });
});
 
 
 /* <script src="validation.js"></script>
var validscript = require('validation.js');
 */
 // var imported = document.createElement('script');
// imported.src = 'validation.js';
// document.head.appendChild(imported);


	

/* 	App.directive('onlyLettersInput', onlyLettersInput);
   function onlyLettersInput() {
     return {
       require: 'ngModel',
       link: function(scope, element, attr, ngModelCtrl) {
         function fromUser(text) {
           var transformedInput = text.replace(/[^a-zA-Z]/g, '');
           //console.log(transformedInput);
           if (transformedInput !== text) {
             ngModelCtrl.$setViewValue(transformedInput);
             ngModelCtrl.$render();
           }
           return transformedInput;
         }
         ngModelCtrl.$parsers.push(fromUser);
       }
     };
   }; */
	
	
	////directives 
	
	App.directive('phNumbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g,'-');
					
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
	                }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});



	App.directive('numbersOnly', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ngModelCtrl) {
            function fromUser(text) {
                if (text) {
                    var transformedInput = text.replace(/[^0-9]/g,'');
					
                    if (transformedInput !== text) {
                        ngModelCtrl.$setViewValue(transformedInput);
                        ngModelCtrl.$render();
	                }
                    return transformedInput;
                }
                return undefined;
            }            
            ngModelCtrl.$parsers.push(fromUser);
        }
    };
});

App.directive('passwordStrength', [
	function() {
		return {
			require: 'ngModel',
			restrict: 'E',
			scope: {
				pass: '=ngModel'
			},
			link: function(scope, elem, attrs, ctrl) {
				scope.$watch('pass', function(input_Value) {
 
					scope.strength = isSatisfied(input_Value && input_Value.length >= 8) +
						isSatisfied(input_Value && /[A-z]/.test(input_Value)) +
						isSatisfied(input_Value && /(?=.*\W)/.test(input_Value)) +
						isSatisfied(input_Value && /\d/.test(input_Value));
					function isSatisfied(criteria) {
						return criteria ? 1 : 0;
					}
				}, true);
			},
			template: '<div class="progress">' +
				'<div class="progress-bar progress-bar-danger progress-bar-striped active" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: {{strength >= 1 ? 25 : 0}}%"></div>' +
				'<div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: {{strength >= 2 ? 25 : 0}}%"></div>' +
				'<div class="progress-bar progress-bar-info progress-bar-striped active" style="width: {{strength >= 3 ? 25 : 0}}%"></div>' +
				'<div class="progress-bar progress-bar-success progress-bar-striped active" style="width: {{strength >= 4 ? 25 : 0}}%"></div>' +
				'</div>'
		}
	}
]) 
App.directive('patternValidator', [
	function() {
		return {
			require: 'ngModel',
			restrict: 'A',
			link: function(scope, elem, attrs, ctrl) {
				ctrl.$parsers.unshift(function(viewStrength) {
					var patt = new RegExp(attrs.patternValidator);
					var isValid = patt.test(viewStrength);
					ctrl.$setValidity('pass_Check', isValid);
					return viewStrength;
 
				});
			}
		};
	}
]);



App.directive('onlyAlphabets', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) {
                return;
            }
            ngModel.$parsers.unshift(function (inputValue) {
                var alphabets = inputValue.split('').filter(function (s) {
                    return (isALetter(s));
                }).join('');
                ngModel.$viewValue = alphabets;
                ngModel.$render();
                return alphabets;
            });
        }
    };

    function isALetter(charVal)
    {
        if( charVal.toUpperCase() != charVal.toLowerCase() ) {
            return true;
        }
        else {
            return false;
        }
    }
});


// tokenAccess/prab

App.directive('myPublicAddDirective', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf("0x") > -1&&value.length==20) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
