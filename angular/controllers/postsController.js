var postsController = function ($scope, $state, $http, authStorageAccess) {

    $scope.posts = {};
    $scope.newPostShow = false;
    $scope.loginobj.loggedIn = authStorageAccess.getData("loginobj").loggedIn;
    if (!$scope.loginobj.loggedIn){
        snackbar();
        $state.go('login');
    }

    $scope.newPost = function () {
        $scope.newPostShow = true;
        $state.go('posts.newpost');
    };

    $http(
        {
            method: 'GET',
            url: 'https://ieeespwd.herokuapp.com/api/posts'
        }
    ).then(
        function (response) {
            if (response.data.errorCode === ""){
                $scope.posts = response.data.data;
            }
            else {
                snackbar();
                $state.go('login');
            }
        },
        function () {
            $state.go('posts');
        }
    );
};

angular.module('myApp').controller('postsController', postsController);