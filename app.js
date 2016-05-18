var app = angular.module('myApp', []);

app.controller('myController', ['myService','$scope',function(myService,$scope) {
    
    const c = this;
	c.mousedown = [];
    
    $scope.firstName= "John";
    $scope.lastName= "Doe";

    const resultsSubscription = myService.mousedowns.subscribe((x) => {
    	$scope.$applyAsync(() => c.mousedown = x);
    	console.log(x);
    });

    $scope.$on('$destroy', () => {
      resultsSubscription.dispose();
      console.log('resultsSubscription destroyed');
    })
}]);

app.service('myService',function(){

	const mousedowns = Rx.DOM.fromEvent(document,'mousedown').map(function(event){
		return {
			x : event.clientX,
			y : event.clientY
		};
	});

	return {
		mousedowns : mousedowns
	}
});





