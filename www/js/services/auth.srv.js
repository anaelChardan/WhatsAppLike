(() => {
    'use_strict'

    angular.module('whatsapp.services').factory('AuthSrv', AuthSrv)

    function AuthSrv($q, ContactsSrv, $state) {
        var connectedUserId = null;

        return {
            connectedUserId: () => connectedUserId,
            connectedUser: () => ContactsSrv.get(connectedUserId),
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
            },
            logout: () => {
                connectedUserId = null;
                $state.go("signin");
            }
        };
    }
})()