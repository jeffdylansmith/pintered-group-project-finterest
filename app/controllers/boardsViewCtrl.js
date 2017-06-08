"use strict";

//get and show all boards belonging to user from FB. remove unwanted boards

app.controller("BoardsViewCtrl", function (authFactory, DataFactory, $scope, $routeParams) {
	console.log("~ BoardsViewCtrl yay! ~", $routeParams);
	let user = authFactory.getUser();
	$scope.getBoards = (user) => {

		DataFactory.getUserBoards(user)
		.then((userBoards) => {
			console.log(userBoards);
			$scope.boards = userBoards;
		});
	};

	$scope.addBoard = (newBoardName) => {

		console.log("newBoardName", newBoardName);
		DataFactory.addBoard(newBoardName)
		.then(() => {
			$scope.getBoards(user);
		});
	};

	$scope.removeBoard = (board) => {
		console.log("Hey", board.boardId);
		DataFactory.removeBoard(board.boardId);
		DataFactory.getBoardPins(board.boardId)
		.then((badPins) => {
			console.log(badPins);
			for(let x in badPins){
				DataFactory.removePin(badPins[x].pinId);
				console.log("badPins", badPins[x].pinId);
			}	
		})
		.then(() => {
			$scope.getBoards(user);
		});
	};
	$scope.getBoards(user);
});







