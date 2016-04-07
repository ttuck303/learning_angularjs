var myApp = angular.module('myApp', []);

myApp.directive("superman", function(){
  return {
    restrict: "A",
    link: function(){
      console.log("I am superman!");
    }
  }


});