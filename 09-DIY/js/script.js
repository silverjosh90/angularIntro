var app = angular.module("myApp", [])

app.controller("myController",function($scope) {
  $scope.formSubmitter = function() {
    if($scope.customForm.$valid) {
      alert("congrats")
    }
  }
})
