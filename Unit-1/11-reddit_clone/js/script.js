
var app= angular.module('moshe', ['ngAnimate', 'angularMoment'])
app.controller('mainController', function($scope){
  $scope.comments = []
  $scope.posts = []
  $scope.commentButton = "Show comment"
  $scope.commentShow = "Add comment"
  $scope.addToggle = function() {
    $scope.postShow = !$scope.postShow
  }

  $scope.toggleDropDown = function() {
    $scope.dropdown = !$scope.dropdown
  }
  // $scope.sort = function(word) {
  //   if ($scope.filtercriteria ==  "'"+word+"'") {
  //     $scope.filtercriteria = "'-"+word+"'"
  //     console.log("-"+word);
  //   }
  //   else {
  //   $scope.filtercriteria = "'"+word+"'"
  //   console.log(word);
  //   }
  // }

  $scope.sortdate = function() {
  if($scope.filtercriteria== "-date"){
    $scope.filtercriteria = "date"
  }
  else{
    $scope.filtercriteria= "-date"
  }
  }
  $scope.sorttitle = function() {
    if($scope.filtercriteria== "-title"){
      $scope.filtercriteria = "title"
    }
    else{
      $scope.filtercriteria= "-title"
    }
  }
  $scope.sortkarma = function() {
    if($scope.filtercriteria== "-karma"){
      $scope.filtercriteria = "karma"
    }
    else{
      $scope.filtercriteria= "-karma"
    }
  }

  $scope.addPost = function(form) {
    if (form) {


    var reddit = {}
    reddit.title = $scope.title
    reddit.subreddit = $scope.subreddit
    reddit.imageurl = $scope.imageURL
    reddit.description = $scope.description
    reddit.number = $scope.posts.length
    reddit.date = Date.now()
    reddit.commentShow = false;
    reddit.commentButton = false;
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
    $scope.addToggle()
    $scope.colorEvaluator(reddit)
    $scope.title = null
    $scope.subreddit = null
    $scope.imageURL = null
    $scope.description = null
  }

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
    post.commentButton = !post.commentButton
    if (post.commentButton == true) {
      $scope.commentButton = "Hide comments"

    }
    else {
      $scope.commentButton = "Show comments"
    }
  }
  $scope.toggleCommentShow = function(post) {
    post.commentShow = !post.commentShow
    post.commentButton = true;
  }
  $scope.commentPost = function(post) {
    com = {}
    com.commented = post.individualComment
    com.date = Date.now()
    post.comments.push(com)
    post.individualComment = null;
    if(post.comments.length > 0) {
      $scope.commentButton = "Hide comments"
      $scope.toggleCommentShow(post)
    }
  }

  $scope.colorEvaluator = function(post) {
    if(post.karma > 0) {
      $scope.color = 'green'
    }
    else if(post.karma == 0) {
      $scope.color = 'black'
    }
    else if(post.karma < 0) {
      $scope.color = 'red'
    }
  }
});
