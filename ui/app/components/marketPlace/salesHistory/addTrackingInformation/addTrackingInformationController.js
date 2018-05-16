App.controller('addTrackingInformationController', function($scope,$rootScope,$compile,$http) {


});
app.directive('onlyLettersInput', function () {
 return {
       require: 'ngModel',
       link: function(scope, element, attr, ngModelCtrl) {
         function fromUser(text) {
           var transformedInput = text.replace(/[^a-zA-Z]/g, '');
           //console.log(transformedInput);
           if (transformedInput !== text) {
             ngModelCtrl.$setViewValue(transformedInput);
             ngModelCtrl.$render();
           }
           return transformedInput;
         }
         ngModelCtrl.$parsers.push(fromUser);
       }
     };
 
 });
