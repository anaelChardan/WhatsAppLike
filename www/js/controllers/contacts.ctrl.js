(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ContactsCtrl', ContactsCtrl)

  function ContactsCtrl($scope, ContactsSrv) {
    $scope.contacts = ContactsSrv.all();
  }
})();