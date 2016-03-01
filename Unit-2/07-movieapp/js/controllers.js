

app.controller('homeController', ['$scope','$http', '$location', function($scope, $http, $location){
  $http.get('http://www.omdbapi.com/?s=&r=json').then(function(rest){
    console.log(rest);
  })
  $scope.movie = null
  $scope.movieSearchFunc = function() {
    title = $scope.titleSearch.replace(/ /g, "+")
    $http.get('http://www.omdbapi.com/?s='+title+'&r=json').then(function(results){
      movieArray = results.data.Search
      // $scope.movie = results.data.Title
      // $scope.actors = results.data.Actors
      $scope.movies = []
      movieArray.map(function(x){

        Formattedtitle = x.Title.replace(/ /g, "+")
        movie = {}
        movie.title = x.Title
        movie.poster = x.Poster
        movie.id = x.imdbID

        // var j = '/show/movies/' + x.Title
        // console.log(j);
        movie.linktitle = Formattedtitle
        console.log(movie.id);
      return $scope.movies.push(movie)
      })
      // console.log($scope.movies);
    })
  }
}]);

app.controller('showController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

  $http.get('http://www.omdbapi.com/?i='+$routeParams.id+'&r=json').then(function(results){
    console.log(results.data);
    $scope.movieInfo = results.data
  })
}])
