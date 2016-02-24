
var app = angular.module('moshe', []);

app.controller('TestController', function($scope){
  console.log("test");
  $scope.derps = ["Hel_lo", "ta_co", "bur_rito"]
});


// .config(function($routeProvider){
//   $routeProvider
//   .when('/', {
//     templateURL:
//     controller:
//   })
// })
