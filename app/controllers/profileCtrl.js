"use strict";

app.controller("ProfileCtrl", function($scope, authFactory, DataFactory) {
    // console.log("UserDetailsCtrl");

    let user = authFactory.getUser();
    $scope.currentUser = "test this";
    // DataFactory.getUserName(user);
    console.log("currentUser: ", $scope.currentUser);
});