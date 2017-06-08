"use strict";

const app = angular.module("Finterest", ["ngRoute"]);

let isAuth = (authFactory, $location) => new Promise ((resolve, reject) => {
	authFactory.isAuthenticated()
	.then((userExists) => {
		if(userExists) {
			console.log("Authenticated, yay!");
			resolve();
		}else {
			console.log("Authentication REJECTED");
			reject();
			$location.path('/');
		}
	});
});

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
        templateUrl: 'partials/auth.html',
        controller: 'authCtrl'
    })
	.when('/login', {
        templateUrl: 'partials/auth.html',
        controller: 'authCtrl'
    })
    .when('/userPins', {
        templateUrl: 'partials/user-pins.html',
        controller: 'UserPinsCtrl',
        resolve: {isAuth}
    })
	.when('/pins', {
		templateUrl: 'partials/pins-view.html',
		controller: 'PinsViewCtrl',
		resolve: {isAuth}
	})
	.when('/add-pin', {
		templateUrl: 'partials/add-pin.html',
		controller: 'AddPinCtrl',
		resolve: {isAuth}
	})
    .when('/pins/:pinId', {
        templateUrl: 'partials/add-pin.html',
        controller: 'AddPinCtrl',
        resolve: {isAuth}
    })
    .when('/userBoards', {
        templateUrl: 'partials/boards-view.html',
        controller: 'BoardsViewCtrl',
        resolve: {isAuth}
    })
    .when('/userBoards/:boardId', {
    	templateUrl:'partials/user-pins',
    	controller: 'BoardPinsCtrl'
    })
	.otherwise('/');
});

app.run(($location, FBcreds) => {
    let creds = FBcreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain,
        databaseURL: creds.databaseURL
    };

    firebase.initializeApp(authConfig);
});