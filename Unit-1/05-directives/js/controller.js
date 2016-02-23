var app = angular.module("deLaSilverstein", []);

app.controller('directive', function($scope){
  $scope.names = ["Harry","Ron","Hermione","Sirius","Hedwig", "Tonks"];
})

app.controller("placed", function($scope){
  $scope.places = ["Nairobi", "Potomac", "Rockville", "Los Angeles", "New York"];
  $scope.capitals = {zello: "dog", age: 16, name: "professor"}
})
