App.controller('addInterestsController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {
    $scope.values = {};
    $scope.selectAll_type=function(type){
				
        if(type == "PurCompType"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesComponentsSelectAll;
            $scope.values.addInterestsPurchasingPreferencesComponentsCase=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesComponentsProjectile=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesComponentsGunpowder=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesComponentsPrimer=chngChkVal;
        }
        if(type == "PurAmmoType"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesAmmoTypeSelectAll;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeHandgun=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeShotgun=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeRifle=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesAmmoTypeRimfire=chngChkVal;
        }
        if(type == "PurBrand"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesBrandSelectAll;
            $scope.values.addInterestsPurchasingPreferencesBrandWinchester=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesBrandRemington=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesBrandFederal=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesBrandFiocchi=chngChkVal;
            
        }if(type == "PurTradePart"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesTradePartnersSelectAll;
            $scope.values.addInterestsPurchasingPreferencesTradePartnersUsGovernment=chngChkVal;
             $scope.values.addInterestsPurchasingPreferencesTradePartnersInternational=chngChkVal;
			 
        }if(type == "PurTimeOfSale"){
            var chngChkVal=$scope.values.addInterestsPurchasingPreferencesTermsOfSaleSelectAll;
            $scope.values.addInterestsPurchasingPreferencesTermsOfSaleImmediate=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesTermsOfSaleWithinThirtyDays=chngChkVal;
            $scope.values.addInterestsPurchasingPreferencesTermsOfSaleThirtyDaysOrMore=chngChkVal;
        }       
    }
    $scope.values = {};
    $scope.values.transactionType = 'buy';

    $scope.transactionType = function(input){
        if(input == 'buy'){
            $scope.values.transactionType = "buy";
        }
        else if(input == 'sell'){
            $scope.values.transactionType = "sell";
        }
    }
    
    $scope.onSaveClose = function () {  
      
        console.log('TRANS TYPE',$scope.values.transactionType);

        var formdata = {
            // "userid" : 101 ,
            "userid" :localStorage.getItem("userId"),
            "alert_name": $scope.values.alertName,
            "transactiontype":$scope.values.transactionType,
			"comp_case":$scope.values.addInterestsPurchasingPreferencesComponentsCase,
			"comp_projectile":$scope.values.addInterestsPurchasingPreferencesComponentsProjectile,
			"comp_gunpowder":$scope.values.addInterestsPurchasingPreferencesComponentsGunpowder,
			"comp_primer":$scope.values.addInterestsPurchasingPreferencesComponentsPrimer,
			"ammo_handgun":$scope.values.addInterestsPurchasingPreferencesAmmoTypeHandgun,
			"ammo_shortgun":$scope.values.addInterestsPurchasingPreferencesAmmoTypeShotgun,
			"ammo_rifle":$scope.values.addInterestsPurchasingPreferencesAmmoTypeRifle,
			"ammo_rimfire":$scope.values.addInterestsPurchasingPreferencesAmmoTypeRimfire,
			"brand_winchester":$scope.values.addInterestsPurchasingPreferencesBrandWinchester,
			"brandRemington":$scope.values.addInterestsPurchasingPreferencesBrandRemington,
			"brandFederal":$scope.values.addInterestsPurchasingPreferencesBrandFederal,
			"brandFiocchi":$scope.values.addInterestsPurchasingPreferencesBrandFiocchi,
			"TpUsgovt":$scope.values.addInterestsPurchasingPreferencesTradePartnersUsGovernment,
			"TpIntgovt":$scope.values.addInterestsPurchasingPreferencesTradePartnersInternational,
			"saletermImmediate":$scope.values.addInterestsPurchasingPreferencesTermsOfSaleImmediate,
			"saletermLt30Days":$scope.values.addInterestsPurchasingPreferencesTermsOfSaleWithinThirtyDays,
			"saletermGt30Days":$scope.values.addInterestsPurchasingPreferencesTermsOfSaleThirtyDaysOrMore

        }

        console.log("in here with form data", formdata);

        var data = JSON.stringify(formdata);
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/Profile/intrests',
            data: data
        }).then(function successCallback(response) {
            console.log(response);
            $location.path('/tokenAccess');
        });
    }

    

}]);
