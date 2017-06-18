var newpostController = function ($scope, $state, authStorageAccess, $http) {

    $scope.$parent.newPostShow = true;
    $scope.loginobj.loggedIn = authStorageAccess.getData("loginobj").loggedIn;
    if (!$scope.loginobj.loggedIn){
        snackbar();
        $state.go('login');
    }

    $scope.save = function () {
        if ($scope.postForm.$valid) {
            var postData = {
                "title": $scope.title,
                "content": $scope.content
            };
            $http(
                {
                    method: 'POST',
                    url: 'https://ieeespwd.herokuapp.com/api/posts',
                    data: postData
                }
            ).then(
                function () {
                    $scope.$parent.newPostShow = false;
                    $state.go('posts', {}, {reload: true});
                }
            )
        }
    };

    $scope.close = function () {
        $scope.$parent.newPostShow = false;
        $state.go('posts');
    }
};

angular.module('myApp').controller('newpostController', newpostController);