"use strict";

app.controller("BoardPinsCtrl", function(authFactory, DataFactory, $scope, $routeParams) {
	console.log("~ BoardsViewCtrl yay! ~", $routeParams);
	let user = authFactory.getUser();
	DataFactory.getBoardPins($routeParams.boardId)
	.then((pins) => {
		console.log("pins", pins);
		$scope.pins = pins;
	});
});