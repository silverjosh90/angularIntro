// var foodList = require('./FoodList')


app.controller('homeController', ['$scope','$http', '$location', 'FoodsService', function($scope, $http, $location, FoodsService){
  console.log("*******");
  $scope.teas = FoodsService.foods;
var array = []
var categoryFilter = FoodsService.foods;
for (var i = 0; i < categoryFilter.length; i++) {

    var iteration = categoryFilter[i].categories
    for (var d = 0; d < iteration.length; d++) {
      array.push(iteration[d])
    }
}

function removeDoubles(input) {
      var newArray = []

  for (var i = 0; i < input.length; i++) {

    var inputIteration = input[i]
    var unique = true;
    for (var j = 0; j < newArray.length; j++) {
      newListIteration = newArray[j]
      if (inputIteration == newListIteration) {
        unique = false
        break;
      }
    }
    if(unique) {
      newArray.push(inputIteration)
    }
  }
  return newArray
  }
  $scope.catFilters = removeDoubles(array)

}])
