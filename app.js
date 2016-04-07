var myApp = angular.module('myApp', []);

myApp.directive('enter', function(){
  return function(scope, element){
    element.bind("mouseenter", function(){
      console.log("I'm inside of " + element);
    })
  }
});

myApp.directive('leave', function(){
  return function(scope, element){
    element.bind("mouseleave", function(){
      console.log("I'm leaving " + element);
    })
  }
});