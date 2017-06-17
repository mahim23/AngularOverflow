var logoutController = function ($scope, $state, $http) {
    var func = function(){
        $http({
        method: 'POST',
        url: 'https://ieeespwd.herokuapp.com/api/logout'
    }).then(function () {
        $scope.loginobj.loggedIn = false;
        $state.go('home');
    }); };

    func();
};

angular.module('myApp').controller('logoutController', logoutController);
