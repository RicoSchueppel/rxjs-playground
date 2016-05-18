var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

var mousedowns = Rx.DOM.fromEvent(document,'mousedown');

mousedowns.subscribe(function(x){
  console.log(x);
});
