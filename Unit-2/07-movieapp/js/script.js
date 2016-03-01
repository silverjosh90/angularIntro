var app = angular.module('moshe', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'pages/home.html',
    controller: 'homeController'
  })
  .when('/show/movies/:id', {
    templateUrl: 'pages/show.html',
    controller: 'showController'
  })
})
