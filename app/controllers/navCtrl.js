"use strict";

//Authorization and SearchTermData... and other stuff?

app.controller("NavCtrl", function ($scope, authFactory, $location) {
	console.log("~ NavCtrl yay! ~");

	$scope.isLoggedIn = false;

	firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in", $scope.isLoggedIn);
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      console.log("currentUser logged in", $scope.isLoggedIn);
      $location.path("#!/login");
    }
  });
});