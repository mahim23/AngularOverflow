var loginController = function($scope, $stateParams, $state, $rootScope, $http){
    $scope.invalidLogin = false;
    
    $scope.loginButton = function(){
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
                var data = response.data;
                if (data.hasOwnProperty('errorCode') || data['statusText'] === "Invalid UserName" || data['statusText'] === "Invalid Password"){
                    $scope.invalidLogin = true;
                    $scope.username = null;
                    $scope.password = null;
                    $scope.loginForm.username.$setUntouched();
                    $scope.loginForm.password.$setUntouched();
                }
                else {
                    $scope.loginobj.loggedIn = true;
                    $state.go('home');
                }
            }
        );
    };
};

angular.module('myApp').controller('loginController', loginController);