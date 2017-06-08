"use strict";

app.controller("ProfileCtrl", function($scope, authFactory, DataFactory, $location) {
    // console.log("UserDetailsCtrl");

    let user = authFactory.getUserName();
    console.log("fuckhole",user);
    $scope.currentUser = user;
    // DataFactory.getUserName(user);
    console.log("currentUser: ", $scope.currentUser, $location.path());

	if($location.path() == "/userBoards") {
		console.log("peeface");
		$('#userBoards')[0].classList.add('btn-success');
	} else if($location.path() == "/userPins") {
		console.log("peeface");
		$('#userPins')[0].classList.add('btn-success');
	}
});