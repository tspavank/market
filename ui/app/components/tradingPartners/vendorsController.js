App.controller('vendorsController', function($scope,$rootScope,$compile,$http) {

$scope.makeStars = function(num , id) {
	var content = "";
	for (var i = 0; i < num; i++) {
      content +="<div class='input-group' style = 'color:orange ;float:left;'id=\"star" + i + "\">&#9733</div>";
    }
	for (var i = 0; i < 5-num; i++) {
      content +="<span id=\"star" + i + "\">&#9733</span>";
    }
	document.getElementById(id).innerHTML = content;
}

  $scope.vendorRate = [
    {
      "Name" : "Vendor name",
      "Product_Quality" : "4",
	  "Service" : "3",
      "Speed" : "2"
    },
    {
      "Name" : "Vendor name",
      "Product_Quality" : "5",
	  "Service" : "3",
      "Speed" : "4"
    },
    {
      "Name" : "Vendor name",
      "Product_Quality" : "3",
	  "Service" : "5",
      "Speed" : "5"
    },
    {
      "Name" : "Vendor name",
      "Product_Quality" : "4",
	  "Service" : "5",
      "Speed" : "3"
    },
	{
      "Name" : "Vendor name",
      "Product_Quality" : "4",
	  "Service" : "5",
      "Speed" : "3"
    }
  ]


});
