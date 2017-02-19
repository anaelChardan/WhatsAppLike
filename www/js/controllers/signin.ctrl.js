(() => {
  'use_strict'
  angular.module('whatsapp.controllers').controller('SigninCtrl', SigninCtrl)

  function SigninCtrl($scope, AuthSrv) {
    $scope.signin = (email, password) => {
        if (false === AuthSrv.authenticate(email, password)) {
            $scope.tried = true;
        }
    }
  }
})();