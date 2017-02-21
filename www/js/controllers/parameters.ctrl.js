(() => {
  'use_strict'
  angular.module('whatsapp.controllers').controller('ParametersCtrl', ParametersCtrl)

  function ParametersCtrl($scope, AuthSrv) {
    $scope.logout = () => AuthSrv.logout();
    $scope.user = AuthSrv.connectedUser();
  }
})();