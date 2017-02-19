(() => {
    'use_strict'

    angular.module('whatsapp.directives').directive('myInputDir', myInputDir)

    function myInputDir() {
        return {
            restrict: 'E',
            scope: {
                modelName: '=',
                placeholder: '@',
                form: '='
            },
            templateUrl: 'templates/directives/my-input.html'
        }
    }

})();