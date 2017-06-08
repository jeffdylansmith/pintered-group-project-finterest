"use strict";

app.controller("ProfileCtrl", function($scope, authFactory, DataFactory) {
    // console.log("UserDetailsCtrl");

    let user = authFactory.getUserName();
    console.log("fuckhole",user);
    $scope.currentUser = user;
    // DataFactory.getUserName(user);
    console.log("currentUser: ", $scope.currentUser);
});