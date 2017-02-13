(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('AccountCtrl', AccountCtrl);

  function AccountCtrl($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }

})();