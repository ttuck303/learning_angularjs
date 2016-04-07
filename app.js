var myApp = angular.module('myApp', []);

myApp.directive('enter', function(){
  return function(scope, element, attrs){
    element.bind("mouseenter", function(){
      console.log("I'm inside of " + element);
      element.addClass(attrs.enter);
    })
  }
});

myApp.directive('leave', function(){
  return function(scope, element, attrs){
    element.bind("mouseleave", function(){
      console.log("I'm leaving " + element);
      element.removeClass(attrs.enter);
    })
  }
});