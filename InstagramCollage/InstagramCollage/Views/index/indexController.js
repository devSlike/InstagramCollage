(function () {
    'use strict';

    angular
        .module('instagram-collage-app')
        .controller('IndexController', IndexController);

    IndexController.$inject = [
        'InstagramService'
    ];

    function IndexController(instagramService) {
        var vm = this;
        vm.name = 'Index';
        vm.login = loginInstagram;

        function loginInstagram() {
            instagramService.login();
        }
    }
})();