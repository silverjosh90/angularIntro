
var input = $("#textField")
var name= $("#named")

$(document).ready(function() {

input.keyup(function(){
  var val = input.val()
  $("#named").html(val)
})



})
