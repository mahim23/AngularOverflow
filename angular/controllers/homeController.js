var homeController = function ($scope, authStorageAccess) {
    if(authStorageAccess.getData("loginobj")){
        var obj = authStorageAccess.getData("loginobj");
        $scope.loginobj.loggedIn = obj.loggedIn;
        $scope.loginobj.name = obj.name;
        console.log(obj);
    }
    else{
        $scope.loginobj = {};
        $scope.loginobj.loggedIn = false;
        $scope.loginobj.name = "";
        authStorageAccess.setData("loginobj", $scope.loginobj);
    }
};

angular.module('myApp').controller('homeController', homeController);