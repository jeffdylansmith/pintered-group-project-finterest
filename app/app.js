"use strict";

const app = angular.module("Finterest", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', function(){
		templateUrl: ("'partials/pins-view.html'")
	})
	.otherwise();
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