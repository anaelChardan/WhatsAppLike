(() => {
  'use_strict'
  angular.module('whatsapp.controllers').controller('SigninCtrl', SigninCtrl)

  function SigninCtrl($scope, AuthSrv, $state) {
    $scope.signin = (email, password) => {
        AuthSrv.authenticate(email, password).then(
          (success) => {$state.go('tab.contacts')},
          (error) => {$scope.tried = true}
        );
    };
  }
})();