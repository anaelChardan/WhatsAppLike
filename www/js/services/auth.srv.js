(() => {
    'use_strict'

    angular.module('whatsapp.services').factory('AuthSrv', AuthSrv)

    function AuthSrv($firebaseAuth, ContactsSrv, $state) {
        var authManager = $firebaseAuth();

        return {
            signup: (firstName, lastName, email, password) => authManager.$createUserWithEmailAndPassword(email, password).then((user) => ContactsSrv.add(user.uid, firstName, lastName, email)),
            authenticate: (email, password) => authManager.$signInWithEmailAndPassword(email, password),
            user: () => {
                var user = authManager.$getAuth();
                return {
                    id: user.uid,
                    email: user.email,
                }
            },
            realUser: () => authManager.$getAuth(),
            signout: () => authManager.$signOut(),
            isConnected: () => authManager.$requireSignIn(),
        };
    }
})()