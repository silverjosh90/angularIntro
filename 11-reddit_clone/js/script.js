
var app= angular.module('moshe', ['ngAnimate'])
app.controller('mainController', function($scope){
  // $scope.karma = 122
  $scope.comments = []
  $scope.posts = []
  $scope.filtercriteria = "karma"
  $scope.addToggle = function() {
    $scope.postShow = !$scope.postShow
  }

  $scope.toggleDropDown = function() {
    $scope.dropdown = !$scope.dropdown
  }
  $scope.sort = function(word) {
    if ($scope.filtercriteria ===  "'"+word+"'") {
      $scope.filtercriteria = "'-"+word+"'"
      console.log("-"+word);
    }
    else {
    $scope.filtercriteria = "'"+word+"'"
    console.log(word);
    }
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
    reddit.upvoter = false
    reddit.downvoter = false
    reddit.colored = ""
    reddit.color = ""
    rando = Math.random()
    random = rando * 10
    reddit.karma = random * 122
    $scope.posts.push(reddit)

  }



  $scope.upvote = function(post){
    post.upvoter = !post.upvoter

    if (post.upvoter){
      post.color = 'green'
      post.colored = 'black'
      post.karma += 1
      // $scope.colored = !$scope.colored
    }
    else {
      post.color = 'black'
      post.karma -= 1

    }

  }
  $scope.downvote = function(post){
    post.downvoter = !post.downvoter

    if (post.downvoter){
      post.colored = 'green'
      post.color = 'black'
      post.karma -= 1
    }
    else {
      post.colored = 'black'
      post.karma += 1

    }

  }
  $scope.comments = []
  $scope.toggleComment = function(post) {
    post.commentShow = !post.commentShow
  }
  $scope.commentPost = function(post) {
    com = {}
    com.commented = post.individualComment
    com.date = Date.now()
    post.comments.push(com)
    post.individualComment = null;
  }
});
