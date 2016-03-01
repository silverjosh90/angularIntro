app.controller("DogsController", ['$scope', function($scope){
  console.log('made it to Dog controller');

  $scope.messages = "Derps"
}])

app.controller("MainController", ['$scope', function($scope){

}]);

app.controller("HomeController", ['$scope', function($scope){
  console.log('made it to Home controller');
  $scope.messages = "Shnerps"
}]);
