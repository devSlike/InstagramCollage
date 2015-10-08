(function () {
    'use strict';

    angular
        .module('instagram-collage-app')
        .controller('AboutController', AboutController);

    AboutController.$inject = [
    ];

    function AboutController() {
        var vm = this;
        vm.name = 'About';
    }
})();