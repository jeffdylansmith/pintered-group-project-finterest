"use strict";

//add new pin to FB

app.controller("AddPinCtrl", function ($scope, DataFactory, authFactory, $routeParams) {
	console.log("~ AddPinCtrl yay! ~");
	// body...

	let user = authFactory.getUser();

	$scope.pin = {
		uid: user,
		boardid: "",
		url: "",
		title: "",

	};

	DataFactory.getUserBoards(user)
	.then((boards) => {
		$scope.boards = boards;
		console.log("boards", boards);
	});

	console.log("routeParams", $routeParams.pinId);

	DataFactory.getPin($routeParams.pinId)
	.then((pin) => {
		console.log("pin", pin);
		if(pin){
			$scope.pin.url = pin.url;
		}
	});

	$scope.addPin = (event) => {
		console.log($scope.pin);
		DataFactory.addPin($scope.pin);
	};
});