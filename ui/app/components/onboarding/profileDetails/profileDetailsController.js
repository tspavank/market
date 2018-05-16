App.controller('profileDetailsController', ['$scope', '$rootScope', '$compile','$http',function ($scope, $rootScope, $compile, $http) {

$scope.values = {};
$scope.fflLicenseNo = /[0-9]{9}[a-zA-Z]{1}[0-9]{5}$/;
$scope.fflLicenseNo1 = /[0-9]{3}[-][0-9]{4}[-][0-9]{4}$/;
$scope.values.ffl_license_url = "";
$scope.values.atf_license_url = "";
$scope.values.itar_license_url = "";
$scope.values.businesstax_license_url = "";
$scope.tempholders = { currDocType: '' };


$scope.fileUpload = function ($input) {
    $scope.tempholders.currDocType = $input;
    $('#docUploadEle').click();
}

$("#docUploadEle").on('change', function (event) {
    onChange($(this)[0]);
});

function onChange(fileObj) {
    var file = fileObj.files[0];
    console.log(file);
    uploadFile(file);
}


function uploadFile(file) {
    var documentType = $scope.tempholders.currDocType;
    var otherInfo = { documentType: file.type };
    var formdata = new FormData();
    formdata.append('myfile', file);
    formdata.append('data', JSON.stringify(otherInfo));

    $.ajax({
        method: 'POST',
        url: 'http://localhost:6060/users/profile/docupload',
        data: formdata,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);
            if (response.status) {
                var documentUrl = response.documentUrl;

                switch (documentType) {
                    case 'companyLogo': $scope.values.logo = documentUrl; break;
                    case 'fflLicenseNo': $scope.values.ffl_license_url = documentUrl; break;
                    case 'atfLicenseNumber': $scope.values.atf_license_url = documentUrl; break;
                    case 'atarLicenseNumber': $scope.values.itar_license_url = documentUrl; break;
                    case 'businessTaxLicenseNumber': $scope.values.businesstax_license_url = documentUrl; break;
                    default: break;
                }

            }
            console.log('scope values', $scope.values);
            resetFile();
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function resetFile() {
    const file = document.querySelector('#docUploadEle');
    file.value = '';
}

$scope.onSaveClose = function (redirectTo) {

    console.log('submitted data', $scope.values);

    var formdata = {
        "company_description": $scope.values.message,
        "business_classification": $scope.values.businessClassification,
        "logo": $scope.values.logo,
        "fb_account": $scope.values.facebook,
        "instagram_account": $scope.values.instagram,
        "twitter_account": $scope.values.twitter,
        "EIN": $scope.values.companyInformationEin,
        "ffl_license_no": $scope.values.fflLicenseNumber,
        "atf_license_no": $scope.values.atfLicenseNumber,
        "itar_license_no": $scope.values.atarLicenseNumber,
        "businesstax_license_no": $scope.values.businessTaxLicenseNumber,
        "ffl_license_url": $scope.values.ffl_license_url,
        "atf_license_url": $scope.values.atf_license_url,
        "itar_license_url": $scope.values.itar_license_url,
        "businesstax_license_url": $scope.values.businesstax_license_url
    };

    console.log("in here with form data", formdata);

    var apidata = JSON.stringify(formdata);
    $http({
        method: 'post',
        url: 'http://localhost:6060/users/profile',
        async: false,
        data: {
            info: formdata,
            userId: (typeof localStorage.userId != "undefined") ? localStorage.userId : 3240
        }
    }).then(function successCallback(response) {
        $location.path('/' + redirectTo);
    });
}

}]);
