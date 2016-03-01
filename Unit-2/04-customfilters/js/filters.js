// app = angular.module('moshe', [])

app.filter('kebab', function () {
  return function (input) {
    var stringInput = input.toString()
    // var j = /_(?=[a-z])/g
    var j = /_/g
    var regex = j.exec(input)
    var word = regex.input
    var indexed = regex.index
    var replaceLetter = word[indexed+1]
    console.log(replaceLetter);
    var split =stringInput.split( "")
    console.log(split);
      return stringInput.replace( replaceLetter , replaceLetter.toUpperCase());
  };
});
