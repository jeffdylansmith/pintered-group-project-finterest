"use strict";

//Login + Logout functions, Authorization (from AuthFactory)

app.controller("authCtrl", function ($scope, authFactory, $window, $location) {
	console.log("~ AuthCtrl yay! ~");
	// body...

$scope.logout = () => {
    console.log("logout clicked");
    authFactory.logoutUser()
      .then(function (data) {
        console.log("logged out?", data);
        $window.location.url = "#!/"; //instead of '$location.path' that used to be here
      }, function (error) {
        console.log("error occured on logout");
      });
  };

  // //when first loaded, make sure no one is logged in
  // if (authFactory.isAuthenticated()) {
  //   $scope.logout();
  // }

  $scope.register = () => {
    console.log("you clicked register");
    authFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
      .then((userData) => {
        console.log("UserCtrl newUser:", userData);
        $scope.login();
      }, (error) => {
        console.log("Error creating user:", error);
      });
  };

  $scope.login = () => {
    console.log("you clicked login");
    authFactory
      .loginUser($scope.account)
      .then(() => {
        // $scope.isLoggedIn = true;
        // console.log("UserCtrl: user is loggedIn", $scope.isLoggedIn );
        // $scope.$apply();
        $window.location.href = "#!/task-list";
      });
  };



  $scope.loginGoogle = () => {
    console.log("clicked loginGoogle");
    let provider = new firebase.auth.GoogleAuthProvider();
    authFactory.authWithProvider(provider)
      .then(function (result) {
        var user = result.user.uid;
        console.log("logged in user:", user);
        // $http.post(`${FBcreds.databaseURL}/users`, user);
        //Once logged in, go to another view
        $location.path("/pins");
        $scope.$apply();
      }).catch(function (error) {
        // Handle the Errors.
        console.log("error with google login", error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  $scope.loginGithub = () => {
    console.log("clicked loginGithub");
    let provider = new firebase.auth.GithubAuthProvider();
    authFactory.authWithProvider(provider)
    .then(function (result) {
      var user = result.user.uid;
      console.log("logged in user:", user);
      // $http.post(`${FBcreds.databaseURL}/users`, user);
      //Once logged in, go to another view
      $location.path("/PLACEHOLDER FOR HOME VIEW");
      $scope.$apply();
    }).catch(function (error) {
      // Handle the Errors.
      console.log("error with google login", error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };




});