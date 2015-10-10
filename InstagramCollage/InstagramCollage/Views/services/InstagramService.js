(function() {
    'use strict';

    angular
        .module('instagram-collage-app')
        .factory('InstagramService', InstagramService);

    InstagramService.inject = [
        '$rootScope',
        '$location',
        '$http'
    ];

    function InstagramService($rootScope, $location, $http) {
        var client_id = "f23a04dedc684920a175ca7220837f46";

        function login() {
            var igPopup = window.open("https://instagram.com/oauth/authorize/?client_id=" + client_id +
                "&redirect_uri=" + $location.absUrl().split('#')[0] +
                "&response_type=token", "igPopup");
        }

        function accessToken(newToken) {
            if (angular.isDefined(newToken)) {
                this._access_token = newToken;
            }
            return this._access_token;
        }

        var service = {
            _access_token: null,
            login: login,
            access_token: accessToken
        };

        $rootScope.$on("igAccessTokenObtained", function (evt, args) {
            service.access_token(args.access_token);
        });

        return service;
    }
})();