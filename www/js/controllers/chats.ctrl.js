(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('ChatsCtrl', ChatsCtrl)

  function ChatsCtrl($scope, ChatsSrv) {
    $scope.chats = ChatsSrv.all();
    $scope.remove = (chat) => ChatsSrv.remove(chat);
  }

})();