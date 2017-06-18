var signupController = function ($scope, $http, $state, authStorageAccess) {
    $scope.dupUsername = false;
    $scope.unableSignup = false;
    $scope.loginobj.loggedIn = authStorageAccess.getData("loginobj").loggedIn;

    var login = function(){
        var loginData = {
            "password": $scope.password
        };
        var loginUrl = "https://ieeespwd.herokuapp.com/api/users/" + $scope.username;
        $http({
            method: 'POST',
            url: loginUrl,
            data: loginData
        }).then(
            function successCallback(response) {
                $scope.loginobj.loggedIn = true;
                $scope.loginobj.name = $scope.username;
                authStorageAccess.setData("loginobj", $scope.loginobj);
                $state.go('posts');
            }
        );
    };

    $scope.signupButton = function () {
        if ($scope.password.length >= 5 && $scope.password.length <= 15){
            var signupData = {
                "username": $scope.username,
                "password": $scope.password,
                "name": $scope.name,
                "admin": false,
                "email": $scope.email
            };
            $http({
                method: 'POST',
                url: 'https://ieeespwd.herokuapp.com/api/users',
                data: signupData
            }).then(
                function (response) {

                    var data = response.data;
                    if (data.hasOwnProperty("errorCode")){
                        $scope.password = '';
                        $scope.signupForm.password.$setUntouched();
                        if (response.data['errorCode'].search('duplicate') !== -1){
                            $scope.dupUsername = true;
                            $scope.unableSignup = false;
                        }
                        else {
                            $scope.unableSignup = true;
                            $scope.dupUsername = false;
                        }
                    }
                    else {
                        login();
                    }
                }
            );
        }
    }
};

angular.module('myApp').controller('signupController', signupController);