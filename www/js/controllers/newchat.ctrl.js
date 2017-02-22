(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('NewChatCtrl', NewChatCtrl);

  function NewChatCtrl($scope, $state, ChatsSrv) {
    $scope.createChat = (name, description) => {
      ChatsSrv.add(name, description).then(
        (chat) => $state.go("tab.chats")
      );
    };
  }

})();