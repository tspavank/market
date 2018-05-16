App.controller('companyInfoController', ['$scope','$rootScope','$compile','$http','$location', function($scope,$rootScope,$compile,$http,$location) {
    $scope.values = {};
    $scope.onSaveClose = function(){
        console.log('submitted data',$scope.values);
        var formdata = {
            "legalBusinessName":$scope.values.legalBusinessName,
            "doingBusinessAsName":$scope.values.doingBusinessAs,
            "corporateStructureDescription":$scope.values.userMessage,
            "mailingAddress":$scope.values.mailingAddress,
            "zip_code":$scope.values.zip,
            "state":$scope.values.state,
            "country":$scope.values.country,
            "expirationDate":"28-04-2018",
            "pscCodes":$scope.values.pscCode,
            "duns":$scope.values.duns,
            "cage":$scope.values.cage,            
            
        }
        console.log("in here with form data", formdata);
        var data = JSON.stringify(formdata);
        $http({
            method: 'post',
            url: 'http://localhost:6060/users/Profile/company',
            data: data
        }).then(function successCallback(response) {
            console.log(response);
            $location.path('/login');
        });
        
    }
}]);
