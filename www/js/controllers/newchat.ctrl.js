(() => {
  'use_strict'

  angular.module('whatsapp.controllers').controller('NewChatCtrl', NewChatCtrl);

  function NewChatCtrl($scope, $location, ChatsSrv) {
    $scope.createChat = (name, description) => {
      let newChat = ChatsSrv.add(name, description);
      $scope.name = null;
      $scope.description = null;
      $location.path('/tab/chats/' + newChat["_id"]);
    };
  }

})();