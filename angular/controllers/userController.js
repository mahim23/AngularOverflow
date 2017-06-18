var userController = function ($scope, $http, $stateParams, authStorageAccess) {

    $scope.loginobj.loggedIn = authStorageAccess.getData("loginobj").loggedIn;
    if (!$scope.loginobj.loggedIn){
        snackbar();
        $state.go('login');
    }

    if ($scope.x.username === $stateParams.id) {
        $http(
            {
                method: 'GET',
                url: 'https://ieeespwd.herokuapp.com/api/users/' + $stateParams.id
            }
        ).then(
            function (response) {
                $scope.uData = response.data;
            }
        )
    }
};

angular.module('myApp').controller('userController', userController);