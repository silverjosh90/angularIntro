app.controller("CoolKidController", ['$scope','$http', function($scope, $http){
  console.log('route working');
  $http.get('https://api.github.com/zen').then(function(result){
    console.log(result)
    $scope.result = result;
  })
}])

app.controller('mainController', ['$scope', '$http', function($scope, $http){
  console.log('main controller here');
}])
