"use strict";

const app = angular.module("Finterest", ["ngRoute"]);



app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
        templateUrl: 'partials/auth.html',
        controller: 'authCtrl'
    })
	.when('/pins', {
		templateUrl: 'partials/pins-view.html',
		controller: 'PinsViewCtrl'
	})
    .when('/userBoards', {
        templateUrl: 'partials/boards-veiw.html',
        controller: 'BoardsViewCtrl'
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