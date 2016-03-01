// app.filter('noDouble', function(){
//   return function(input) {
//         var newArray = []
//
//     for (var i = 0; i < input.length; i++) {
//
//       var inputIteration = input[i]
//       var unique = true;
//       for (var j = 0; j < newArray.length; j++) {
//         newListIteration = newArray[j]
//         if (inputIteration == newListIteration) {
//           unique = false
//           break;
//         }
//       }
//       if(unique) {
//         newArray.push(inputIteration)
//       }
//     }
//     return newArray
//     }
// })

app.filter('money', function(){
  return function(input){
    return input/100
  }
})
