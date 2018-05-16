App.controller('loginController', function ($scope, $rootScope, $compile, $http,$location) {
    // var token = {"token" : localStorage.getItem("token") }
    $scope.submit = function () {
		var data = JSON.stringify($scope.values);
		$http({
			method: 'post',
			url: 'http://localhost:6060/users/login',
			data: data,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
            console.log(response.data);
            if (typeof(Storage) !== "undefined" && response.data.token != "") {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);
            }
            if(response.data.accStatus == "INACTIVE" || response.data.status == "" ){
                $location.path('/mfaChooseMethod');
            }
			//  window.location = $scope.hostname + "#/login";
		}, function errorCallback(response) {
			console.log(response.statusText);
		});
    }
    $scope.checkToken =function(){
        $http({
			method: 'post',
			url: 'http://localhost:6060/users/mfa/email',
			data: "",
			headers: {
                'Content-Type': 'application/json',
                 'token' : localStorage.getItem("token")
			}
		}).then(function successCallback(response) {
            console.log(response.data);
		}, function errorCallback(response) {
			console.log(response.statusText);
		});
    }
});


function show_hide() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}