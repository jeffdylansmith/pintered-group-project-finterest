"use strict";

//get and show all boards belonging to user from FB. remove unwanted boards

app.controller("BoardsViewCtrl", function (authFactory, DataFactory, $scope) {
	console.log("~ BoardsViewCtrl yay! ~");
	let user = authFactory.getUser();
	DataFactory.getUserBoards(user)
	.then((userBoards) => {
		console.log(userBoards);
		$scope.boards = userBoards;
	});

	$scope.addBoard = (newBoardName) => {
		DataFactory.addBoard(newBoardName);
		console.log("newBoardName", newBoardName);
	};

	$scope.removeBoard = (board) => {
		console.log("Hey", board.title);
		DataFactory.removeBoard(board.title);
	};
});