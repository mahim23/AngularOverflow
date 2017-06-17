var usersController = function ($scope, $state, $http) {

    $scope.usersData = {
        "username": "",
        "name": "",
        "email": ""
    };

    $http(
        {
            method: 'GET',
            url: 'https://ieeespwd.herokuapp.com/api/users'
        }
    ).then(
        function (response) {
            $scope.usersData = response.data.data;
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

    $scope.showUser = function (username) {
        $http(
            {
                method: 'GET',
                url: 'https://ieeespwd.herokuapp.com/api/users/' + username
            }
        ).then(
            function (response) {
                $scope.uData = response.data;
                $scope.showU = true;
                $(".user-details").click(function(event) {
                    var clickedId = event.currentTarget.id ;
                    $(".user-details.active").removeClass("active");
                    $(this).addClass("active");
                });
            }
        );
    };

};

angular.module('myApp').controller('usersController', usersController);