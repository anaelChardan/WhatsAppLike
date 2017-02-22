(() => {
  'use_strict'
  angular.module('whatsapp.controllers').controller('SignupCtrl', SignupCtrl)

  function SignupCtrl($scope, AuthSrv, $state) {
    $scope.signup = (email, password, firstName, lastName) => {
        AuthSrv.signup(firstName, lastName, email, password).then(
          () => $state.go("tab.chats"),
          () => $scope.tried = true
        );
    }
  }
})();