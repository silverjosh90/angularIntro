var app = angular.module("validationApp",[]);

app.controller("mainController", function($scope) {
  $scope.submitForm = function() {
    if($scope.userForm.$valid) {
      alert("Congratulations")
    }
  }
  $scope.startsWithP = function() {
    console.log(named);

  }
});
