App.controller('intakeFormController', ['$scope', '$http', function ($scope, $http) {


	$scope.selectAll_type = function (type) {

		if (type == "PurCompType") {
			var chngAmmo = $scope.values.purchasingPreferencesComponentsSelectAll;
			$scope.values.purchasingPreferencesComponentsCase = chngAmmo;
			$scope.values.purchasingPreferencesComponentsProjectile = chngAmmo;
			$scope.values.purchasingPreferencesComponentsGunpowder = chngAmmo;
			$scope.values.purchasingPreferencesComponentsPrimer = chngAmmo;
		}
		if (type == "PurAmmoType") {
			var chngAmmo = $scope.values.purchasingPreferencesAmmoTypeSelectAll;
			$scope.values.purchasingPreferencesAmmoTypeHandgun = chngAmmo;
			$scope.values.purchasingPreferencesAmmoTypeShotgun = chngAmmo;
			$scope.values.purchasingPreferencesAmmoTypeRifle = chngAmmo;
			$scope.values.purchasingPreferencesAmmoTypeRimfire = chngAmmo;
		}
		if (type == "PurBrand") {
			var chngAmmo = $scope.values.purchasingPreferencesBrandSelectAll;
			$scope.values.purchasingPreferencesBrandWinchester = chngAmmo;
			$scope.values.purchasingPreferencesBrandRemington = chngAmmo;
			$scope.values.purchasingPreferencesBrandFederal = chngAmmo;
			$scope.values.purchasingPreferencesBrandFiocchi = chngAmmo;
			$scope.values.purchasingPreferencesBrandHornday = chngAmmo;
		} if (type == "PurTradePart") {
			var chngAmmo = $scope.values.purchasingPreferencesTradePartnersSelectAll;
			$scope.values.purchasingPreferencesTradePartnersUSGoverntment = chngAmmo;
			$scope.values.purchasingPreferencesTradePartnersInternationalGovernment = chngAmmo;
			$scope.values.purchasingPreferencesTradePartnersUSCommercial = chngAmmo;
			$scope.values.purchasingPreferencesTradePartnersInternationalCommercial = chngAmmo;
		} if (type == "PurTimeOfSale") {
			var chngAmmo = $scope.values.purchasingPreferencesTermsOfSaleSelectAll;
			$scope.values.purchasingPreferencesTermsOfSaleImmediate = chngAmmo;
			$scope.values.purchasingPreferencesTermsOfSaleWithinthirtyDays = chngAmmo;
			$scope.values.purchasingPreferencesTermsOfSalethirtyDaysOrMore = chngAmmo;
		} if (type == "SellCompType") {
			var chngAmmo = $scope.values.sellingPreferencesComponentsSelectAll;
			$scope.values.sellingPreferencesComponentsCase = chngAmmo;
			$scope.values.sellingPreferencesComponentsProjectile = chngAmmo;
			$scope.values.sellingPreferencesComponentsGunpowder = chngAmmo;
			$scope.values.sellingPreferencesComponentsPrimer = chngAmmo;
		}
		if (type == "SellAmmoType") {
			var chngAmmo = $scope.values.sellingPreferencesAmmoTypeSelectAll;
			$scope.values.sellingPreferencesAmmoTypeHandgun = chngAmmo;
			$scope.values.sellingPreferencesAmmoTypeShotgun = chngAmmo;
			$scope.values.sellingPreferencesAmmoTypeRifle = chngAmmo;
			$scope.values.sellingPreferencesAmmoTypeRimfire = chngAmmo;
		}
		if (type == "SellBrand") {
			var chngAmmo = $scope.values.sellingPreferencesBrandSelectAll;
			$scope.values.sellingPreferencesBrandWinchester = chngAmmo;
			$scope.values.sellingPreferencesBrandRemington = chngAmmo;
			$scope.values.sellingPreferencesBrandFederal = chngAmmo;
			$scope.values.sellingPreferencesBrandFiocchi = chngAmmo;
			$scope.values.sellingPreferencesBrandHornday = chngAmmo;
		} if (type == "SellTradePart") {
			var chngAmmo = $scope.values.sellingPreferencesTradePartnersSelectAll;
			$scope.values.sellingPreferencesTradePartnersUSGoverntment = chngAmmo;
			$scope.values.sellingPreferencesTradePartnersInternationalGovernment = chngAmmo;
			$scope.values.sellingPreferencesTradePartnersUSCommercial = chngAmmo;
			$scope.values.sellingPreferencesTradePartnersInternationalcommercial = chngAmmo;
		} if (type == "SellTermOfSale") {
			var chngAmmo = $scope.values.sellingPreferencesTermsOfSaleSelectAll;
			$scope.values.sellingPreferencesTermsOfSaleImmediate = chngAmmo;
			$scope.values.sellingPreferencesTermsOfSaleWithinthirtyDays = chngAmmo;
			$scope.values.sellingPreferencesTermsOfSalethirtyDaysOrMore = chngAmmo;
		}


	}



	$scope.values = {};
	$scope.values.transactionType = {};
	$scope.values.transactionType.buy = false;
	$scope.values.transactionType.sell = false;
	$scope.phoneNumbr = /^\+?\d{3}[- ]?\d{3}[- ]?\d{4}$/;
	$scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

	$scope.values.businessType = {};
	$scope.values.businessType.Supplier = false;
	$scope.values.businessType.Retailer = false;
	$scope.values.businessType.Manufacturer = false;
	$scope.values.businessType.Consumer = false;
	$scope.values.businessType.Distributor = false;
	$scope.values.businessType.Government = false;

	$scope.hostname = "http://" + window.location.host;
	$scope.myFunc = function (val) {
		var obj = $scope.values.businessType;
		$scope.chkName = obj.Supplier + ',' + obj.Retailer + ',' + obj.Manufacturer + ',' + obj.Consumer + ',' + obj.Distributor + ',' + obj.Government;

	}



	$scope.buyintcheck = function () {
		var buy = document.getElementsByName("buyint");
		var hasChecked = false;
		for (var i = 0; i < buy.length; i++) {
			if (buy[i].checked) {
				hasChecked = true;
				$scope.values.transactionType.buy = true;
				break;
			} else {
				$scope.values.transactionType.buy = false;
			}
		}


	}

	$scope.sellintcheck = function () {
		var sell = document.getElementsByName("sellint");
		var hasChecked = false;
		for (var i = 0; i < sell.length; i++) {
			if (sell[i].checked) {
				hasChecked = true;
				$scope.values.transactionType.sell = true;
				break;
			} else {
				$scope.values.transactionType.sell = false;
			}
		}


	}




	$scope.submit = function () {
		$scope.sellintcheck();
		$scope.buyintcheck();
		var data = JSON.stringify($scope.values);
		$http({
			method: 'post',
			url: 'http://localhost:6060/users/intake',
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log(JSON.stringify(response));
			// if(response.data == true){
			window.location = $scope.hostname + "#/accountInformation";
			// }
		}, function errorCallback(response) {
			console.log(response.statusText);
		});
	}
}
]);
