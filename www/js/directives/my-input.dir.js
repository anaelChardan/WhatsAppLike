(() => {
    'use_strict'

    angular.module('whatsapp.directives').directive('myInputDir', myInputDir)

    function myInputDir() {
        console.log("COUCOU");
        return {
            restrict: 'E',
            scope: {
                model: '=',
                placeholder: '@',
                form: '='
            },
            templateUrl: 'templates/directives/my-input.html'
        }
    }

})();