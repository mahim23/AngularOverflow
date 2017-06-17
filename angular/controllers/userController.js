var userController = function ($scope, $http, $stateParams) {
    
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
};

angular.module('myApp').controller('userController', userController);