(() => {
  'use_strict'
  angular.module('whatsapp.controllers').controller('ParametersCtrl', ParametersCtrl)

  function ParametersCtrl($scope, AuthSrv, ContactsSrv, $state, $ionicHistory) {
    $scope.logout = () => AuthSrv.signout().then(() => {
      $ionicHistory.clearCache();
      $ionicHistory.clearHistory();
      $state.go('signin');
    });
    ContactsSrv.get(AuthSrv.user().id).$loaded().then(
      (user) => {
        $scope.user = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          id: user.$id
        }
      }
    );
  }
})();
