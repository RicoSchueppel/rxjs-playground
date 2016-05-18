var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

var mousedowns = Rx.DOM.fromEvent(document,'mousedown').map(function(event){
	return {
		x : event.clientX,
		y : event.clientY
	};
});


mousedowns.subscribe((x) => console.log(x));
