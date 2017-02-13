(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ChatDetailCtrl', ChatDetailCtrl)

  function ChatDetailCtrl($scope, $stateParams, ChatsSrv, MessagesSrv, AuthSrv) {
    $scope.user = AuthSrv.connectedUser();
    $scope.chat = ChatsSrv.get($stateParams.chatId);
    $scope.messages = MessagesSrv.get($stateParams.chatId);
  }

})();