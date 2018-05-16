App.controller('tokenAccessController', ['$scope', '$rootScope', '$compile', '$http', '$location', function ($scope, $rootScope, $compile, $http, $location) {

    $scope.values = {};

    $scope.onSaveClose = function () {  

        console.log('submitted data'+ $scope.values );

        var formdata = {
            "userid" :localStorage.getItem("userId"),
            "ETHERPublicAddress":  $scope.values.eitherPublicAddress,
			"ZERVPublicAddress": $scope.values.ZERVPublicAddress

        };

        console.log("in here with form data", formdata);

        var data = JSON.stringify(formdata);
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/Profile/token',
            data: data
        }).then(function successCallback(response) {
            console.log(response);
            $location.path('/tokenAccess');
        });
    }


}]);
