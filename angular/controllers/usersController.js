var usersController = function ($scope, $state, $http, authStorageAccess) {

    $scope.usersData = {};
    $scope.loginobj.loggedIn = authStorageAccess.getData("loginobj").loggedIn;
    if (!$scope.loginobj.loggedIn){
        snackbar();
        $state.go('login');
    }

    $http(
        {
            method: 'GET',
            url: 'https://ieeespwd.herokuapp.com/api/users'
        }
    ).then(
        function (response) {
            if (response.data.errorCode === ""){
                $scope.usersData = response.data.data;
            }
            else {
                snackbar();
                $state.go('login');
            }
        },
        function (response) {
            $state.go('users');
        }
    );

};

angular.module('myApp').controller('usersController', usersController);