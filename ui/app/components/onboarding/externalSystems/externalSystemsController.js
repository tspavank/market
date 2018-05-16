App.controller('externalSystemsController', function($scope,$rootScope,$compile,$http) {
$scope.values = {};

$scope.connectAccount = function() {
	if($scope.values.regid == "reg@1234")
	{
	$('#myModal').modal({ show: false})
	window.location = "http://" + window.location.host + "/#/externalSystemsSelected";
	}
	else {
		alert("error");
	}
};

});
