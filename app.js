var myApp = angular.module("myApp", [])

.filter("reverse", function(){
  return function(textIn){
    return textIn.split("").reverse().join("");
  };

  });