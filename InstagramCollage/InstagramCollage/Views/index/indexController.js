(function () {
    'use strict';

    angular
        .module('instagram-collage-app')
        .controller('IndexController', IndexController);

    IndexController.$inject = [
    ];

    function IndexController() {
        var vm = this;
        vm.name = 'Index';
        vm.loginInstagram = loginInstagram;

        function loginInstagram() {
            vm.name = 'Login';
        }
    }
})();