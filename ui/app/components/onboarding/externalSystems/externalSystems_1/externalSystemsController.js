App.controller('externalSystemsController', function ($scope, $rootScope, $compile, $http) {
	$scope.values = {};
	$scope.connectAccount = function (duns) {
		var url = 'https://api.data.gov:443/sam/v1/registrations/' + duns + '?api_key=fXnWNftp2tniBzwxcht5zzVnSOks3NPdplQSLNr3';
		// 0636039550000

		var data =  {['userid'] : localStorage.getItem("userId") , ['duns'] : duns}
		$http({
			method: 'get',
			url: url,
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function successCallback(response) {
			if (response.data != "") {
				if (response.data != "") {
					$http({
						method: 'put',
						data: data,
						url: 'http://localhost:6060/users/account',
						headers: {
							'Content-Type': 'application/json'
						}
					}).then(function successCallback(response) {
						if (response.data.duns == data.duns) {
							$('#myModal').modal({ show: false });
							window.location = "http://" + window.location.host + "/#/externalSystemsSelected";
						}
					}, function errorCallback(response) {
						callback(false);
					});
	
				}
			}
		}, function errorCallback(response) {
			console.log(response.statusText);
			$('#myModal').modal({ show: false });
		});

	};
	
});
