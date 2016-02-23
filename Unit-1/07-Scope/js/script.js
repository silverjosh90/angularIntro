var app = angular.module("firstApp",[])

app.controller("firstController", function($scope){
  $scope.model = [
  {name: "derp", city: "Omaha", origin: "Brazil"},
   {name: "jeremiah", city: "Omaha", origin: "China"},
   {name: "brandon", city: "rockville", origin: "India"},
    ];
   $scope.number = 5
   $scope.pickRandomNumber = function() {
     $scope.number= Math.floor(Math.random() * 10) + 1
   }
})
