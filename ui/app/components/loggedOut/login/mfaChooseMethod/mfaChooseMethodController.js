App.controller('mfaChooseMethodController', function ($scope, $rootScope, $compile, $http, $location) {
	$scope.values = {};
	// $scope.values.phone = "text";
	$scope.values.byemail = "email";
	$scope.redirectionfun = function () {
		if ($scope.values.phone == 'text') {
			$location.path("/mfaEnterCodePhoneText");
		} else if ($scope.values.phone == 'call') {
			$location.path("/mfaEnterCodePhoneCall");
		} else if ($scope.values.byemail == 'email') {
			$location.path("/mfaEnterCodeEmail");
		}
	};

	$scope.email = ".......";
	$scope.phone = "XXX-XXX-";

	$scope.fetchEmailPhone = function () {
		var userId = localStorage.getItem("userId");
		console.log("userId : " + userId);
		$http({
			method: 'get',
			url: 'http://localhost:6060/users/' + userId,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log(JSON.stringify(response.data));
			var email1 = response.data[0].email_address;
			var phone1 = response.data[0].phone_number;
			console.log(email1);
			
			var avg, splitted, part1, part2;
			splitted = email1.split("@");
			part1 = splitted[0];
			length = part1.length;
			first = part1.substring(0, 1);
			last = part1.substring(length - 1, length);
			part2 = splitted[1];
			$scope.email = first + "......" + last + "@" + part2;

			$scope.phone = "XXX-XXX-" + phone1.slice(-4);
		}, function errorCallback(response) {
			console.log(response.statusText);
		});
	}

	$scope.fetchEmailPhone();
});