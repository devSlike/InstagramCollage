angular.module('instagram-collage-app', ['ngRoute'])
    .config([
        '$routeProvider', function ($routeProvider) {

            var viewPath = '/Views/';
            $routeProvider
                .when('/about', {
                    templateUrl: viewPath + '/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'aboutCtrl'
                })
                .when('/index', {
                    templateUrl: viewPath + '/index/index.html',
                    controller: 'IndexController',
                    controllerAs: 'indexCtrl'
                })
                .otherwise({
                    redirectTo: '/index'
                });
        }
    ]);