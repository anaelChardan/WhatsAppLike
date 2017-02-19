(() => {
    'use_strict'

    angular.module('whatsapp.services').factory('AuthSrv', AuthSrv)

    function AuthSrv($q, ContactsSrv, $state) {
        var connectedUserId = null;

        return {
            connectedUser: () => connectedUserId,
            $requireAuth: () => {
                var deferred = $q.defer();
                (null === connectedUserId) ? deferred.reject(new Error("AUTH_REQUIRED")) : deferred.resolve();
                return deferred.promise;
            },
            authenticate: (email, password) => {
                var contact = ContactsSrv.getByAuthInfo(email, password);
                if (undefined === contact) {
                    return false;
                }
                connectedUserId = contact["_id"];
                $state.go("tab.chats");
            }
        };
    }
})()