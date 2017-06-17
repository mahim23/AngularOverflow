var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: 'partials/signup.html',
            controller: 'signupController'
        })
        .state('logout', {
            url: '/',
            templateUrl: 'partials/logout.html',
            controller: 'logoutController'
        })
        .state('users', {
            url: '/users',
            templateUrl: 'partials/users.html',
            controller: 'usersController'
        })
        .state('users.show', {
            url: '/:id',
            templateUrl: 'partials/user.html',
            controller: 'userController'
        })
});

var snackbar = function () {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
};