"use strict";

//on pin click show modal of the pin. add click events to save pin to

app.controller("UserPinsCtrl", function (DataFactory, $scope, $location, authFactory) {
	console.log("~ UserPinsCtrl yay! ~");

	$scope.getUserPins = function(){
		let user = authFactory.getUser();
		console.log("user", user);
		DataFactory.getUserPins(user)
		.then((pins) => {
			console.log("pins", pins);
			$scope.pins = pins;
		});
	};


	$scope.removePin = (pin) => {
		console.log("Hey", pin);
		DataFactory.removePin(pin.pinId);
		$scope.getUserPins();
	};

	$scope.getUserPins();
});