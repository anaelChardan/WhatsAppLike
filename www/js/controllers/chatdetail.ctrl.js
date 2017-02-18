(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ChatDetailCtrl', ChatDetailCtrl)

  function ChatDetailCtrl($scope, $stateParams, ChatsSrv, MessagesSrv, AuthSrv) {
    let chatId = $stateParams.chatId;
    $scope.user = AuthSrv.connectedUser();
    $scope.chat = ChatsSrv.get(chatId);
    $scope.messages = MessagesSrv.get(chatId);
    $scope.sendMessage = (message) => {
      MessagesSrv.add(message, chatId);
      $scope.message = null;
      $scope.messages = MessagesSrv.get(chatId);
    };
  }

})();