var postController = function ($scope, $state, authStorageAccess, $http, $stateParams) {

    $scope.loginobj.loggedIn = authStorageAccess.getData("loginobj").loggedIn;
    if (!$scope.loginobj.loggedIn){
        snackbar();
        $state.go('login');
    }
    $scope.showPost = false;

    $http(
        {
            method: 'GET',
            url: 'https://ieeespwd.herokuapp.com/api/posts/' + $stateParams.id
        }
    ).then(
        function (response) {
            $scope.postData = response.data.data[0];
            $scope.authorData = $scope.postData.author;
            $scope.showPost = true;
        },
        function () {
            $state.go("post", { id: $stateParams.id});
        }
    );

    $scope.userInfo = function () {
        $state.go('users.show', { id: $scope.authorData.username});
    }
};

angular.module('myApp').controller('postController', postController);