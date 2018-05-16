App.controller('accountInformationController', function ($scope, $rootScope, $compile, $http) {

  $scope.ph_numbr = /^\+?\d{3}[- ]?\d{3}[- ]?\d{4}$/;
  $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


  $scope.hostname = "http://" + window.location.host;
  $(".toggle-password").click(function () {

    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $scope.submit = function () {
		var data = JSON.stringify($scope.values);
		$http({
			method: 'post',
			url: 'http://localhost:6060/users/account',
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			console.log(JSON.stringify(response));
			window.location = $scope.hostname + "#/login";
		}, function errorCallback(response) {
			console.log(response.statusText);
		});
	}

});

