var logoutController = function ($scope, $state, $http, authStorageAccess) {
    var func = function(){
        $http({
        method: 'POST',
        url: 'https://ieeespwd.herokuapp.com/api/logout'
    }).then(function () {
        $scope.loginobj.loggedIn = false;
        $scope.loginobj.name = "";
        authStorageAccess.setData("loginobj", $scope.loginobj);
        $state.go('home');
    });
    };

    func();
};

angular.module('myApp').controller('logoutController', logoutController);
