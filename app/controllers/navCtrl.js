"use strict";

//Authorization and SearchTermData... and other stuff?

app.controller("NavCtrl", function ($scope, authFactory, DataFactory, $location) {
	console.log("~ NavCtrl yay! ~");

	let userObj = {
		name: "",
		uid: "",
	};

	$scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in", $scope.isLoggedIn);

      userObj.name = user.displayName;
      userObj.uid = user.uid;

      DataFactory.addUser(user.uid, userObj);
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      console.log("currentUser logged in", $scope.isLoggedIn);
      $location.path("#!/login");
    }
  });
});