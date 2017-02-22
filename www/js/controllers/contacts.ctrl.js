(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ContactsCtrl', ContactsCtrl)

  function ContactsCtrl($scope, ContactsSrv, AuthSrv) {
    ContactsSrv.all().$loaded().then(
      (contacts) => {
        $scope.contacts = contacts.filter((contact) => contact.$id !== AuthSrv.user().id);
      }
    );
  }
})();