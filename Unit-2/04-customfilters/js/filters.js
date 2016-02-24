// app = angular.module('moshe', [])

app.filter('kebab', function () {
  return function (input) {
      return input.replace(/_/g , "-");
  };
});
