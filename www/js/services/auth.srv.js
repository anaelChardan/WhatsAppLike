(() => {
    'use_strict'
    
    angular.module('whatsapp.services').factory('AuthSrv', AuthSrv)

    function AuthSrv() {
        var connectedUserId = "589b286646a9a7d3a224deaf"

        return {
            connectedUser: function () {
                return connectedUserId;
            }
        };
    }
})()