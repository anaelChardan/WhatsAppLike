(() => {
  'use_strict'
  angular.module('whatsapp.controllers').controller('SignupCtrl', SignupCtrl)

  function SignupCtrl($scope, AuthSrv, ContactsSrv) {
    $scope.signup = (email, password, firstName, lastName, phone) => {
        if (false === ContactsSrv.add(email, password, firstName, lastName, phone)) {
          $scope.tried = true;
        } else {
          AuthSrv.authenticate(email, password);
        }
    }
  }
})();