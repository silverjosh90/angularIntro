app = angular.module('moshe', ['ngRoute'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
        templateUrl: 'pages/home.html',
        controller: 'CoolKidController'
      })

});
