

var app=angular.module('myApp',[]);
app.controller('validateCtrl',function($scope)
{
	  
	   $scope.submit=function()
	   {
	   $scope.result=$scope.myText.length;
	   }
	
	
});	