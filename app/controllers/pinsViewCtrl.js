"use strict";

//get and show all pins belonging to user from FB. remove unwanted pins

app.controller("PinsViewCtrl", function (DataFactory, $scope, $location) {
	console.log("~ PinsViewCtrl yay! ~");
	// body...
	$scope.getAllPins = function(){
		DataFactory.getAllPins()
		.then((pins) => {
			console.log("pins", pins);
			$scope.pins = pins;
		});
	};

	$scope.getAllPins();
});