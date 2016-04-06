var myApp = angular.module("myApp", ["ui.router"])

  .config(function config($stateProvider, $urlRouterProvider){

    // for any unmatched route, redirect to /
    $urlRouterProvider.otherwise('index');

    $stateProvider
      .state('index', {
        url: '',
        templateUrl: 'templates/first.html',
        controller: "FirstCtrl as first"
      })
      .state('second', {
        url: '/second',
        templateUrl: 'templates/second.html',
        controller: "SecondCtrl as second"
      });

  })

  .service("greeting", function Greeting(){
    var greeting = this;
    greeting.message = "default";
  })

  .controller("FirstCtrl", function FirstCtrl(greeting){
    var first = this;
    first.greeting = greeting;

    })

  .controller("SecondCtrl", function SecondCtrl(greeting){
    var second = this;
    second.greeting = greeting;
  });
