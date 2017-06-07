"use strict";

//add new pin to FB

app.controller("AddPinCtrl", function ($scope, DataFactory, authFactory) {
	console.log("~ AddPinCtrl yay! ~");
	// body...

	let user = authFactory.getUser();

	$scope.pin = {
		uid: user,
		boardid: "",
		url: "",
		title: "",

	};
	DataFactory.getUserBoards();
	$scope.addPin = () => {
		DataFactory.addPin($scope.pin);
	};
});