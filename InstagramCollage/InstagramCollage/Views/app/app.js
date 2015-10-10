angular.module('instagram-collage-app', ['ngRoute', 'angular-uri'])
    .config([
        '$routeProvider', '$stateProvider', '$locationProvider', 'URI', function ($routeProvider, $stateProvider, $locationProvider, URI) {

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

            var uri = new URI();
            var qs = URI.parseQuery(uri.query());
            if (angular.isDefined(qs.error_reason) || angular.isDefined(qs.error) || angular.isDefined(qs.error_description)) {
                if (angular.isDefined(window.opener) && window.opener != null) {
                    var $parentScope = window.opener.angular.element(window.opener.document).scope();
                    $parentScope.$broadcast("igAccessTokenError", { error: qs.error, error_reason: qs.error_reason, error_description: qs.error_description });
                }
                window.close();
            }

            $stateProvider.
                state('oauthsuccess', {
                    url: "/access_token={access_token}",
                    templateUrl: 'Partials/OAuth.html',
                    controller: 'OAuthLoginController'
                });
        }
    ]);