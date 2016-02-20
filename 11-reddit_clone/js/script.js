
var app= angular.module('moshe', [])
app.controller('mainController',function($scope){
  $scope.karma = 122
  var upvoter = false
  var downvoter = false
  $scope.comments = []
  $scope.posts = []
  // $scope.individualComment = ""
  $scope.addToggle = function() {
    $scope.postShow = !$scope.postShow
  }

  $scope.toggleDropDown = function() {
    $scope.dropdown = !$scope.dropdown
  }
  $scope.sortDate = function() {
    console.log("Date");
    $scope.filtercriteria = 'date'
  }
  $scope.sortKarma = function() {
    console.log("Karma");
    $scope.filtercriteria = 'karma'
  }
  $scope.sortTitle = function() {
    console.log("Title");
    $scope.filtercriteria = 'title'
  }

  $scope.addPost = function() {

    var reddit = {}
    reddit.title = $scope.title
    reddit.subreddit = $scope.subreddit
    reddit.imageurl = $scope.imageURL
    reddit.description = $scope.description
    reddit.number = $scope.posts.length
    reddit.date = Date.now()
    reddit.commentShow = false;
    reddit.comments = []
    reddit.individualComment = null
    rando = Math.random()
    random = rando * 10
    reddit.multiply = random
    $scope.posts.push(reddit)

  }



  $scope.upvote = function(){
    upvoter = !upvoter

    if (upvoter){
      $scope.color = 'green'
      $scope.colored = 'black'
      $scope.karma += 1
      // $scope.colored = !$scope.colored
    }
    else {
      $scope.color = 'black'
      $scope.karma -= 1

    }

  }
  $scope.downvote = function(){
    downvoter = !downvoter

    if (downvoter){
      $scope.colored = 'green'
      $scope.color = 'black'
      $scope.karma -= 1
    }
    else {
      $scope.colored = 'black'
      $scope.karma += 1

    }

  }
  $scope.comments = []
  $scope.toggleComment = function(post) {
    post.commentShow = !post.commentShow
  }
  $scope.commentPost = function(post) {
    com = {}
    console.log($scope.individualComment);
    com.commented = post.individualComment
    com.date = Date.now()
    post.comments.push(com)
    post.individualComment = null;
  }
});
