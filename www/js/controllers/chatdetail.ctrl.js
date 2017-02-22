(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ChatDetailCtrl', ChatDetailCtrl)

  function ChatDetailCtrl($scope, $stateParams, ChatsSrv, MessagesSrv, AuthSrv) {
    let chatId = $stateParams.chatId;
    $scope.userId = AuthSrv.user().id;
    $scope.chat = ChatsSrv.get(chatId);
    $scope.messages = MessagesSrv.get(chatId);
    $scope.sendMessage = (message) => {
      MessagesSrv.add(message, chatId);
      $scope.message = null;
      $scope.messages = MessagesSrv.get(chatId);
    };
  }

})();